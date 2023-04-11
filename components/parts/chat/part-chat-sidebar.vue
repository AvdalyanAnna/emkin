<template lang="pug">
  .chat-sidebar(:class="Mods")
    .chat-sidebar__top
      button-link-arrow.chat-sidebar__back(:to="backLink" v-if="moderator === true")
      .chat-sidebar__title.h3 {{title}}
        span.color-blue(v-if="ALL_MESSAGES_UNREAD_COUNT") ({{ALL_MESSAGES_UNREAD_COUNT}})
      part-chat-search.chat-sidebar__search(:key="key" @clearSearch="(val) => key = val ")
      <!--part-back-nav.favorites-ad__nav(:nav="nav" :activeRouterClass="'active_tab'")-->
      part-back-nav-chat.chat-sidebar__nav(:nav="nav" :activeRouterClass="'active_tab'" @clearSearch="(val) => key = val ")
      form-checkbox.chat-sidebar__select-all(all  :checked="CHECKED_LIST.length === list.length" @change.native="SET_CHECKED_ALL" v-if="$screen.st && moderator === false && list.length > 0")
        span.color-gray.h6 Select all
    .chat-sidebar__stat(v-if="statText")
      .chat-sidebar__stat-text
        | {{statText}}
        span.color-blue ({{statCounter}})
    .chat-sidebar__container
      .chat-sidebar__container-wrap
        .chat-sidebar__list
          support-item-chat(v-if="$route.query.tab === 'support'" name="Support" button v-b-modal:modal-help :desc="'A pleasure to contact with you ...'")
          item-chat.chat-sidebar__item(
            v-for="(item, i) in list"
            :key="i"
            :name="item.participants ? item.participants.messageable.first_name: ''"
            :avatar="item.participants.messageable.avatar ? item.participants.messageable.avatar.original_full_url : ''"
            :time="item.last_message ? item.last_message.created_at : ''"
            :counter="item.unread_messages_count"
            :desc="item.advertise ? cutStringWithDots(item.advertise.name,20) : ''"
            :status="item.status"
            :last_message="item.last_message || {}"
            :conversation_id="item.conversation_id"
            :checked="item.checked"
            :small="small"
            button
            :class="{isActive:number == item.conversation_id}"
            @changeCheckbox="checkedItem(item.slug,i)"
            @change="(val) => tabList(val,item.conversation_id,item)"
          )
            | {{item.last_message ? cutStringWithDots(item.last_message.body,30) : ''}}

          infinite-loading(:distance="20" :identifier="sidebarScrollIdentifier" @infinite="infinite")
            div(slot="no-results")
            div(slot="no-more")
            div(slot="spinner")
          modal-help
          modal-thank(:desc="'Our manager will write to you shortly'" notRedirectToHome)

</template>

<script>
import {mapMutations, mapGetters, mapActions} from "vuex";

export default {
  props: {
    title: {
      type: String,
      default: 'Messages'
    },
    counter: {
      type: Number,
      default: 20
    },
    statCounter: {
      type: Number,
      default: null
    },
    statText: {
      type: String,
      default: ''
    },
    search: {
      type: Boolean,
      default: true
    },
    moderator: {
      type: Boolean,
      default: false
    },
    checkbox: {
      type: Boolean,
      default: true
    },
    small: {
      type: Boolean,
      default: false
    },
    backLink: {
      type: String,
      default: '#'
    },
    list: {
      type: Array,
      default: () => ([])
    }
  },
  data() {
    return {
      key:0,
      nav: [
        {
          text: 'Resell',
          class: 'isActive',
          counter: '3',
          to: '/chat?tab=resell'
        },
        {
          text: 'Buying',
          counter: '2',
          to: '/chat?tab=buying'
        },
      ],
      panelOpen: false,
      // number: 0,
      i: 0
    }
  },
  computed: {
    ...mapGetters({
      NUMBER: 'chat/NUMBER',
      CHECKED_LIST: 'chat/CHECKED_LIST',
      CONVERSATION_MESSAGES_PAGE: 'chat/CONVERSATION_MESSAGES_PAGE',
      SIDEBAR_SCROLL_IDENTIFIER: 'chat/SIDEBAR_SCROLL_IDENTIFIER',
      ALL_MESSAGES_UNREAD_COUNT: 'chat/ALL_MESSAGES_UNREAD_COUNT',
    }),
    number: {
      get() {
        return this.NUMBER
      },
      set(number) {
        this.SET_ACTIVE_USER(number)
      }
    },
    conversationMessagesPage: {
      get() {
        return this.CONVERSATION_MESSAGES_PAGE;
      },
      set(val) {
        this.CHANGE_CONVERSATION_MESSAGES_PAGE(val);
      }
    },
    sidebarScrollIdentifier(){
      return this.SIDEBAR_SCROLL_IDENTIFIER
    },
    Mods() {
      return {
        'chat-sidebar_moderator': this.moderator
      }
    }
  },
  methods: {
    ...mapMutations({
      SET_ACTIVE_CONVERSATION_ID: 'chat/SET_ACTIVE_CONVERSATION_ID',
      SET_ACTIVE_USER: 'chat/SET_ACTIVE_USER',
      CHANGE_CONVERSATION_MESSAGES_PAGE: 'chat/CHANGE_CONVERSATION_MESSAGES_PAGE',
      SET_CHAT_TOP_USER_DATA: 'chat/SET_CHAT_TOP_USER_DATA',
      SET_MESSAGES: 'chat/SET_MESSAGES',
      SET_FOCUS_AFTER_MESSAGE_SEND: 'chat/SET_FOCUS_AFTER_MESSAGE_SEND',
    }),
    ...mapActions({
      SET_CHECKED: 'chat/SET_CHECKED',
      SET_CHECKED_ALL: 'chat/SET_CHECKED_ALL',
    }),
    infinite($state) {
      this.$emit('fetchMoreData', $state);
    },
    checkedItem(slug, i) {
      this.SET_CHECKED(i)
    },
    tabList(conversation_id, i,data) {

      this.SET_ACTIVE_CONVERSATION_ID(conversation_id);
      this.conversationMessagesPage = 1;
      this.SET_MESSAGES({data: [], current_page: 1});
      this.number = i;
      this.SET_CHAT_TOP_USER_DATA(data);
      this.SET_FOCUS_AFTER_MESSAGE_SEND();
      // this.$emit('setKey',data);
      if (window.innerWidth < 1121) {
        if (document.querySelector(".section-chat__column_left")) {
          document.querySelector(".section-chat__column_left").style.display = "none";
        }
      }
    },
    cutStringWithDots(string, max) {
      let dots = string.length > max ? '...' : '';
      return string.substring(0, max) + dots
    }
  },
}
</script>

<style lang="scss">
.chat-sidebar {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-bottom: 20rem;

  @include small-tablet {
    padding-bottom: 60rem;
  }
  &__nav{
    margin-top: 30px;
  }

  &_moderator {
    .chat-sidebar {
      &__top {
        min-height: 91rem;
        border-bottom: 1px solid $light-gray;
        padding-top: 20rem;
        padding-bottom: 20rem;
        display: flex;
        align-items: center;
      }
    }
  }

  &__back {
    margin-right: 25rem;

    .link-arrow {
      &__icon {
        width: 15rem;
        height: 17rem;
        transform: rotate(180deg);
        stroke: $default;
      }
    }
  }

  &__top {
    padding: 32rem 25rem 14rem 25rem;

    @include large-tablet {
      padding-right: 0;
    }

    @include small-tablet {
      padding: 20rem var(--wrapper-offset) 5rem var(--wrapper-offset);
    }
  }

  /**/
  &__container {
    flex: 1 1 auto;
    position: relative;

    &-wrap {
      position: absolute;
      left: 0;
      top: 0;
      width: calc(100% - 4px);
      height: 100%;
      overflow-x: hidden;
      overflow-y: auto;
      padding-right: 4px;
      padding-left: 10px;

      &::-webkit-scrollbar {
        width: 2px;
      }

      /* Track */
      &::-webkit-scrollbar-track {
        background: none;
      }

      /* Handle */
      &::-webkit-scrollbar-thumb {
        background: $blue;
        border-radius: 5px;
      }
    }

    @include small-tablet {
      overflow: hidden;
      &-wrap {
        width: calc(100% + 12rem);
        padding: 0 32rem 0 20rem;
      }
    }
  }

  &__title {
    font-family: 'Atyp Display';
    line-height: .8;
    @include large-mobile {
      font-weight: 500;
    }
  }

  &__search {
    margin-top: 24rem;

    @include large-mobile {
      margin-top: 17rem;
    }
  }

  &__select-all {
    margin-top: 25rem;

    @include large-mobile {
      display: none;
    }
  }

  &__panel {
    margin-top: -50rem;
  }

  &__item {
    &:not(:first-child) {
      border-top: 1px solid #F4F3F4;
    }
  }

  &__stat {
    padding: 22rem 10rem 14rem 30rem;
    font-size: 16rem;
    font-weight: 600;
  }
}
</style>