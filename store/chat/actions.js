export default {
  GET_CHAT_USERS_LIST({commit, state}, payload) {

    let params = {
      page: state.conversation_page,
      perPage: state.conversation_perPage,
      sorting: 'desc',
      conversation_type: payload.query.toLowerCase(),
      take_counts:true
    };

    if (payload.search === '') commit('SET_SEARCH', '');

    if (payload.search) {
      commit('SET_SEARCH', payload.search);
      params = {...params, search: state.search}
    }

    if (state.tabs.indexOf(payload.query.toLowerCase()) !== -1) {
      // return this.$axios.get(this.$chat.getConversations, {
      //   params
      // })
      //   .then(res => {
      //     if (state.conversation_page > 1) {
      //       state.list.map(function (item) {
      //         let index = res.data.data.findIndex(object => object.conversation_id === item.conversation_id);
      //         if (index !== -1) res.data.data.splice(index, 1);
      //       });
      //     }
      //
      //     commit('SET_CONVERSATION_LAST_PAGE', res.data.meta.last_page);
      //     commit('SET_CONVERSATION_TYPE', res.data.conversation_type);
      //     commit('CHANGE_CHAT_USERS_LIST', {data: res.data.data, current_page: res.data.meta.current_page});
      //
      //
      //     commit('SET_UNREAD_MESSAGES_COUNT_TO_SIDEBAR_TAB', {text: 'resell', count: res.data.resell_count});
      //     commit('SET_UNREAD_MESSAGES_COUNT_TO_SIDEBAR_TAB', {text: 'buying', count: res.data.buying_count});
      //     commit('SET_UNREAD_MESSAGES_COUNT_TO_SIDEBAR_TAB', {text: 'support', count: res.data.support_count});
      //
      //     commit('SET_ALL_MESSAGES_UNREAD_COUNT', res.data.unread_count);
      //
      //     // if (res.data.data.length > 0 && res.data.meta.current_page === 1 && !res.data.data[0].last_message){
      //     //   commit('SET_CHAT_TOP_USER_DATA',res.data.data[0]);
      //     //   commit('SET_ACTIVE_CONVERSATION_ID',res.data.data[0].conversation_id)
      //     //
      //     // }
      //     if (res.data.data.length < 1 && res.data.meta.current_page === 1) {
      //       commit('SET_ACTIVE_CONVERSATION_ID')
      //     }
      //   });

      return new Promise((resolve, reject) => {
        let loaded = undefined;
        this.$axios.get(this.$chat.getConversations, {
          params
        })
            .then(res => {

              if (state.conversation_page > 1) {
                state.list.map(function (item) {
                  let index = res.data.data.findIndex(object => object.conversation_id === item.conversation_id);
                  if (index !== -1) res.data.data.splice(index, 1);
                });
              }

              commit('SET_CONVERSATION_LAST_PAGE', res.data.meta.last_page);
              commit('CHANGE_CONVERSATION_PAGE', res.data.meta.current_page + 1);
              commit('SET_CONVERSATION_TYPE', res.data.conversation_type);
              commit('CHANGE_CHAT_USERS_LIST', {data: res.data.data, current_page: res.data.meta.current_page});


              commit('SET_UNREAD_MESSAGES_COUNT_TO_SIDEBAR_TAB', {text: 'resell', count: res.data.resell_count});
              commit('SET_UNREAD_MESSAGES_COUNT_TO_SIDEBAR_TAB', {text: 'buying', count: res.data.buying_count});
              commit('SET_UNREAD_MESSAGES_COUNT_TO_SIDEBAR_TAB', {text: 'support', count: res.data.support_count});

              commit('SET_ALL_MESSAGES_UNREAD_COUNT', res.data.unread_count);

              // if (res.data.data.length > 0 && res.data.meta.current_page === 1 && !res.data.data[0].last_message){
              //   commit('SET_CHAT_TOP_USER_DATA',res.data.data[0]);
              //   commit('SET_ACTIVE_CONVERSATION_ID',res.data.data[0].conversation_id)
              //
              // }
              if (res.data.data.length < 1 && res.data.meta.current_page === 1) {
                commit('SET_ACTIVE_CONVERSATION_ID')
              }

              loaded = res.data.meta.current_page <= res.data.meta.last_page;
              resolve(loaded);
            });
      })
    }
  },
  SET_CHECKED({commit, state}, index) {
    if (state.list[index].checked === true) {
      commit('CHANGE_CHECKED', index);
      commit('CHANGE_CHECKED_ALL_REMOVE', state.list[index].conversation_id);
    } else {
      commit('CHANGE_CHECKED', index);
      commit('CHANGE_CHECKED_ALL_PUSH', state.list[index].conversation_id);
    }
  },
  SET_CHECKED_ALL({commit}) {
    commit('CHANGE_CHECKED_ALL');
  },
  FETCH_MESSAGES({state, commit}, conversation_id) {
    return new Promise((resolve, reject) => {
      let loaded = undefined;
      this.$axios.$get(this.$chat.getMessages + '/' + conversation_id + `/messages?page=${state.conversation_messages_page}&perPage=${state.conversation_messages_perPage}&sorting=desc`)
          .then(({data: {data, last_page, current_page}}) => {
                commit('SET_CONVERSATION_MESSAGES_LAST_PAGE', last_page);
                commit('CHANGE_CONVERSATION_MESSAGES_PAGE', current_page + 1);
                commit('SET_MESSAGES', {data, current_page})
                loaded = current_page <= last_page
                resolve(loaded);
              }
          );
    })

  },
  ADD_CONVERSATION({state, commit}, data) {
    if (data.participant_id === this.$auth.user.id) {
      this.$changeRoute('/');
      return
    }

    this.$axios.post(this.$chat.addConversation, data).then(res => {
      if (res) {
        let conversation = {
          participant_id: data.participant_id,
          advertise_id: data.advertise_id,
          message: true,
        };
        conversation = {...conversation, conversation_id: res.data.data.conversation_id};


        res.data.data.participants = res.data.data.participants.filter(participant => participant.messageable_id !== this.$auth.user.id)[0];
        res.data.data.participants.messageable['blocked_list'] = [];
        commit('SET_CHAT_TOP_USER_DATA',res.data.data);
        commit('SET_ACTIVE_CONVERSATION_ID',res.data.data.conversation_id);
        commit('SET_ACTIVE_USER',res.data.data.conversation_id);
        commit('CHANGE_CONVERSATION_MESSAGES_PAGE',1);
        commit('SET_MESSAGES',{data: [], current_page: 1});
        localStorage.setItem('conversation', JSON.stringify(conversation));
        this.$router.push({path: this.$changeRoute('/chat'), query: {tab: 'buying'}});

      }
    })
  },
  SEND_MESSAGE({commit}, data) {
    return new Promise((resolve, reject) => {
      this.$axios.post(this.$chat.getMessages + '/' + data.conversation_id + '/messages', data.data).then(res => {
        commit('SET_SENDER_SIDEBAR', {message: res.data.data.body, created_at: res.data.data.created_at})
        resolve(res)
      }).catch(err => {
        reject(err)
      });
    })

  },
  DELETE_CONVERSATION({state, commit}, conversation_ids = []) {

    if (!(conversation_ids.length > 0) && state.conversation_type === 'buying') {
      let index = state.list.findIndex(object => object.last_message === null);
      if (index !== -1) {
        conversation_ids.push(state.list[index].conversation_id);
        commit('DELETE_USER_FROM_LIST', conversation_ids)
      }
    }

    if (!(conversation_ids.length > 0) && state.conversation_type !== 'buying') {
      conversation_ids.push(JSON.parse(localStorage.getItem('conversation')).conversation_id);
    }

    if (conversation_ids.length > 0) {
      this.$axios.post(this.$chat.deleteConversation, {
        conversations: conversation_ids,
        _method: 'DELETE'
      }).then(res => {
        if (res) {
          commit('DELETE_USER_FROM_LIST', conversation_ids);
          commit('SET_ACTIVE_CONVERSATION_ID');
          commit('SET_ACTIVE_USER', null);
        }
      });
    }
     commit('SET_SIDEBAR_NAV_COUNT',conversation_ids.length);
  },
  UNBLOCK_USER({state,commit},unblock_id){
    return new Promise((resolve, reject) => {
      this.$axios.post(this.$chat.unBlockUser,{unblock_id:unblock_id}).then(res => {
        resolve(res)
      })
    });
  },
  BLOCK_USER({state,commit},blocked_id){
    return new Promise((resolve, reject) => {
      this.$axios.post(this.$chat.blockUser,{blocked_id : blocked_id}).then(res => {
        resolve(res)
      })
    });
  },
  CLOSE_CHAT({state,commit},active_conversation_id){
    return this.$axios.$put(`${this.$chat.closeChat}/${active_conversation_id}/close`)
  }
}