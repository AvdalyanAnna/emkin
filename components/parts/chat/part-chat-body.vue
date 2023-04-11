<template lang="pug">
  .chat-body
    .chat-body__top
      .chat-body__row.flex.flex_justify.flex_vertical
        .chat-body__column.chat-body__column_left
          component.chat-body__back(
            :is="to !== '' ? 'NuxtLink' : 'div'"
            :to="to !== '' ? to : false"
            @click="showSidebar"
          )
            svg-icon(name="prev")
          item-chat(
            v-b-modal.users-adds
            v-if="ACTIVE_CONVERSATION_ID"
            :avatar="bodyTopData.participants.messageable.avatar ? bodyTopData.participants.messageable.avatar.original_full_url : ''"
            :name="bodyTopData.participants.messageable.first_name"
            :time="bodyTopData.last_message ? bodyTopData.last_message.created_at : ''"
            :desc="bodyTopData.advertise ? bodyTopData.advertise.name : ''"
            :slug="bodyTopData.advertise ? '/product/' + bodyTopData.advertise.slug : '/'"
            isClickable
            :checkbox="false"
          )
            | {{text}}
        .chat-body__column.chat-body__column_right.flex(v-if="moderator")
          .chat-body__buttons.flex
            button-primary.chat-body__btn.mobile-hidden(gray)
              span.color-gray Close chat
            button-primary.chat-body__btn.mobile-hidden(blue) Waiting for answer
            button-medium.chat-body__more.mobile-visible(icon="dotsRotate" white square v-b-modal.modal-action)
        .chat-body__column.chat-body__column_right.flex(v-else)
          .chat-body__buttons.flex.align-items-center
            button-medium.chat-body__btn(gray icon="infoCircle" v-b-modal.modal-safety v-if="$route.query.tab !== 'support'")
              span.p For your safety
            button-primary.button-primary_blue.chat-body__btn(@click.native.prevet="closeChat" blue v-else-if="bodyTopData.status")
              span Close chat
            button-medium.chat-body__btn.mobile-hidden(v-show="CHECKED_LIST.length < 1"  gray square icon="dots" name="chatAction")
            button-medium.chat-body__btn.mobile-visible(gray square icon="dots" v-b-modal.modal-action)
          tippy.tippy-hide(to="chatAction" placement="bottom-end" trigger="click" )
            .chat-body__action
              .chat-body__action-item
                button-medium.chat-body__action-btn(v-if="!bodyTopData.is_blocked && $route.query.tab !== 'support'" @click.native="blockUser" white) Block
              .chat-body__action-item
                button-medium.chat-body__action-btn(v-if="$route.query.tab !== 'support'" white v-b-modal:modal-complaint) Complaint
              .chat-body__action-item
                button-medium.chat-body__action-btn(@click.native="deleteChat" white) Delete the Chat
    .chat-body__container(:key="ACTIVE_CONVERSATION_ID")
      .chat-body__container-wrap.css-scrollbar(@scroll="onScroll" ref="infoBox")
        slot
        .chat-body__section(v-for="(message, i) in conversationMessages" :key="i")
          .chat-body__date(v-if="message.date")
            .chat-body__date-text {{ message.date }}
          .chat-body__date(v-else)
            .chat-body__date-text {{ message.date }}
          .chat-body__list
            item-chat-message.chat-body__item(
              v-for="(item, i) in message.messages"
              :key="i"
              :id="item.id"
              :avatar="item.participation.messageable.avatar ? item.participation.messageable.avatar.original_url : ''"
              :name="item.participation.messageable.first_name"
              :time="item.send_time.toLowerCase()"
              :content="[{text:item.body,read:item.read_at ? true : false}]"
              :answer="item.answer"
              :messagable_id="item.participation.messageable_id"
              :gallery="item.files"
            )

            // CHAT END MESSAGE
            item-chat-message.chat-body__item(
              v-if="$route.query.tab === 'support' && !bodyTopData.status"
              chat-end
              :time="format(new Date(bodyTopData.updated_at),'hh mm aaa')"
              :avatar="require('~/assets/sprite/svg/headphones.svg')"
              name="Emkin web site"
              :content="[{text:'A pleasure to contact with you again!',read: false}]"
            )
    .chat-body__bottom(v-if="$route.query.tab === 'support'")
      part-chat-form.chat-body__form(v-if="bodyTopData.status" :files="files" )
    .chat-body__bottom(v-else)
      part-chat-form.chat-body__form(:key="BLOCKED_KEY" :files="files" :blocked="bodyTopData.is_blocked" :unBlockedId="bodyTopData.participants.messageable_id")

      modal-users-adds(
        v-if="$route.query.tab !== 'support'"
        :userId="bodyTopData.participants.messageable_id"

      )
    //modal-action(title="The ad is activated")
    //  .modal-action__item
    //    button-primary.modal-action__btn(blue) Waiting for answer
    //  .modal-panel__item
    //    button-primary.modal-action__btn(gray)
    //      span.color-gray Close chat
</template>

<script>
import {mapGetters, mapActions, mapMutations} from "vuex";
import {format} from 'date-fns'

export default {
  props: {
    avatar: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    desc: {
      type: String,
      default: ""
    },
    time: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    },
    to: {
      type: String,
      default: ""
    },
    moderator: {
      type: Boolean,
      default: false
    },
    messages: {
      type: [Object, Array],
      default: () => ([])
    },
  },
  data() {
    return {
      format,
      lastMessage: null,
      key: 0,
      files: [
        {
          img: 'create-gallery__img5_small.jpg'
        },
        {
          img: 'create-gallery__img1_small.jpg'
        },
        {
          img: 'create-gallery__img2_small.jpg'
        },
        {
          name: 'Macbook pro 2016 4k',
          size: '73КБ'
        }
      ],
      deleteFlag: false
    }
  },
  watch: {
    lastMessageOfList(newVal, oldVal) {
      if (newVal) {
        this.matchHeight(newVal)
      }
    },
  },
  computed: {
    ...mapGetters({
      MESSAGES_PER_PAGE: 'chat/MESSAGES_PER_PAGE',
      ACTIVE_CONVERSATION_ID: 'chat/GET_ACTIVE_CONVERSATION_ID',
      GET_CONVERSATION_MESSAGES: 'chat/GET_CONVERSATION_MESSAGES',
      CONVERSATION_MESSAGES_PAGE: 'chat/CONVERSATION_MESSAGES_PAGE',
      CHAT_TOP_USER_DATA: 'chat/CHAT_TOP_USER_DATA',
      SCROLL_ID: 'chat/SCROLL_ID',
      CHECKED_LIST: 'chat/CHECKED_LIST',
      BLOCKED_KEY: 'chat/BLOCKED_KEY',
      USER_PRODUCT: 'product/USER_PRODUCT',
    }),
    conversationMessages() {
      return this.GET_CONVERSATION_MESSAGES;
    },
    bodyTopData: {
      get() {
        return this.CHAT_TOP_USER_DATA
      },
      set(val) {
        this.SET_BLOCKED_FLAG_FOR_USER(val)
      }
    },
    lastMessageOfList: {
      get() {
        let lastMessageOfList = this.$collect(this.conversationMessages).last()
            ? this.$collect(this.$collect(this.conversationMessages).last().messages).last()
            : null;
        this.SET_LAST_MESSAGE_OF_LIST(lastMessageOfList);
        return lastMessageOfList;
      },
      set() {
        this.SET_LAST_MESSAGE_OF_LIST_MAKE_SEEN()
      },
    },
  },
  methods: {
    ...mapActions({
      DELETE_CONVERSATION: 'chat/DELETE_CONVERSATION',
      BLOCK_USER: 'chat/BLOCK_USER',
      CLOSE_CHAT: 'chat/CLOSE_CHAT',
      SET_USER_PRODUCTS: 'product/SET_USER_PRODUCTS',
    }),
    ...mapMutations({
      CHANGE_CHECKED_REMOVE_ALL: 'chat/CHANGE_CHECKED_REMOVE_ALL',
      RESET_UNREAD_MESSAGES: 'chat/RESET_UNREAD_MESSAGES',
      SET_LAST_MESSAGE_OF_LIST: 'chat/SET_LAST_MESSAGE_OF_LIST',
      SET_LAST_MESSAGE_OF_LIST_MAKE_SEEN: 'chat/SET_LAST_MESSAGE_OF_LIST_MAKE_SEEN',
      SET_BLOCKED_FLAG_FOR_USER: 'chat/SET_BLOCKED_FLAG_FOR_USER',
      SET_ACTIVE_CONVERSATION_ID: 'chat/SET_ACTIVE_CONVERSATION_ID',
      SET_CLOSED_FLAG_FOR_USER: 'chat/SET_CLOSED_FLAG_FOR_USER',
    }),
    onScroll({target: {scrollTop, clientHeight, scrollHeight}}) {
      if (scrollTop + clientHeight >= scrollHeight) {
        if (this.lastMessageOfList && this.$auth.user.id !== this.lastMessageOfList.participation.messageable_id && !this.lastMessageOfList.read_at) {
          this.makeSeen()
        }
      }
      // scrolltoBottom(){
      //   const el = document.querySelector(".chat-body__list");
      //   console.log(el);
      //   var lastChild = el.lastElementChild;
      //   console.log(lastChild);
      //   // console.log(el);
      //   // console.log(lastChild);
      //   lastChild.scrollIntoView({behavior: 'smooth'});
      //   // el.scrollTop(1000000000)
      // }
    },
    matchHeight(lastMessage) {
      let height = this.$refs.infoBox;
      let isHeight = height.scrollTop + height.clientHeight >= height.scrollHeight;
      if (lastMessage && isHeight && this.$auth.user.id !== lastMessage.participation.messageable_id && !lastMessage.read_at) {
        this.makeSeen()
      }
    },
    makeSeen() {
      this.$axios.put(this.$chat.getConversations + `/${this.lastMessageOfList.conversation_id}/readAll`).then(res => {
        this.lastMessageOfList = 1;
        this.RESET_UNREAD_MESSAGES()
      }).catch(err => {
        console.log(err)
      });

    },
    infinite($state) {
      this.$emit('fetchMoreMessages', $state);
    },
    blockUser() {
      this.BLOCK_USER(this.bodyTopData.participants.messageable_id).then(res => {
        if (res.data.status === 'Success') {
          this.bodyTopData = this.bodyTopData.participants.messageable_id
        }
      });
    },
    closeChat(){
      this.CLOSE_CHAT(this.ACTIVE_CONVERSATION_ID).then(res => {
        console.log('chat',res);
        if (res.status === 'Success') {
          this.SET_CLOSED_FLAG_FOR_USER(this.ACTIVE_CONVERSATION_ID)
        }
      })
    },
    deleteChat() {
      this.$bvModal.show('modal-delete');
    },
    showSidebar() {
      this.SET_ACTIVE_CONVERSATION_ID();

      if (document.querySelector(".section-chat__column_left")) {
        document.querySelector(".section-chat__column_left").removeAttribute("style");
      }
    },

  },
  mounted() {
    this.matchHeight()
  },

}
</script>

<style lang="scss">
.chat-body__container-wrap {
  scroll-padding-top: 10em
}

.chat-body {
  display: flex;
  flex-direction: column;
  height: 100%;

  @include small-tablet {
    /*padding-bottom: 50rem;*/
  }

  &__top {
    padding: 15rem 0 16rem 25rem;
    position: relative;

    &:before {
      content: '';
      display: block;
      width: 3000px;
      height: 1px;
      background: $light-gray;
      position: absolute;
      left: 0;
      bottom: 0;
    }

    @include small-tablet {
      border-top: 1px solid $light-gray;
      border-bottom: 1px solid $light-gray;
      padding: 14rem var(--wrapper-offset);
      &:before {
        display: none;
      }
    }
  }

  &__column {
    &_left {
      display: flex;
      align-items: center;
    }
  }

  &__back {
    width: 22rem;
    height: 22rem;
    margin-right: 8rem;
    margin-left: -5rem;
    cursor: pointer;
    flex-shrink: 0;
    fill: #464646;

    svg {
      width: 100%;
      height: 100%;
    }

    @include min-large-tablet {
      display: none;
    }

    @include large-mobile {

    }
  }

  &__container {
    flex: 1 1 auto;
    position: relative;
    margin-top: 10rem;

    &-wrap {
      padding-top: 2px;
      padding-bottom: 2px;
      position: absolute;
      left: 0;
      top: 0;
      width: calc(100% + 10rem);
      height: 100%;
      overflow-x: hidden;
      overflow-y: auto;
      padding-right: 10rem;
      padding-left: 25rem;
    }

    @include small-tablet {
      margin-top: 20rem;
      &-wrap {
        padding: 10rem calc(var(--wrapper-offset) + 10rem) 10rem var(--wrapper-offset);
      }
    }
  }

  &__btn {
    &:not(:last-child) {
      margin-right: 10rem;
    }

    &.button-primary {
      padding-left: 30rem;
      padding-right: 30rem;
    }

    @include large-mobile {
      padding: 0;
      width: 40rem;
      &:not(:last-child) {
        margin-right: 5rem;
      }
      .button-medium {
        &__icon {
          margin-right: 0;
        }

        &__text {
          display: none;
        }
      }
    }
  }

  &__action {
    text-align: left;
    margin: -10rem;
    min-width: 220rem;

    &-btn {
      padding: 5rem 19rem;
      font-size: 17rem;
      width: 100%;
      justify-content: flex-start;
      font-weight: 500;

      &:hover {
        background: #F5F5F7;
      }
    }
  }

  &__bottom {
    padding: 24rem 0 20rem 25rem;

    @include small-tablet {
      padding: 5rem var(--wrapper-offset);
      margin-top: 20rem;
    }

    @include large-mobile {
      border-top: 1px solid $light-gray;
    }
  }

  &__section {
    &:not(:first-child) {
      margin-top: 40rem;
    }

    @include large-mobile {
      &:not(:first-child) {
        margin-top: 30rem;
      }
    }
  }

  &__date {
    display: flex;
    overflow: hidden;
    justify-content: center;

    &-text {
      position: relative;
      color: $gray;

      &:before, &:after {
        content: '';
        display: block;
        position: absolute;
        top: 50%;
        height: 1px;
        width: 1000px;
        background: $light-gray;
      }

      &:before {
        right: 100%;
        margin-right: 20rem;
      }

      &:after {
        left: 100%;
        margin-left: 20rem;
      }
    }

    @include large-mobile {
      &-text {
        &:before {
          margin-right: 15rem;
        }

        &:after {
          margin-left: 15rem;
        }
      }
    }
  }

  &__list {
    &:not(:first-child) {
      margin-top: 40rem;
    }

    @include large-mobile {
      &:not(:first-child) {
        margin-top: 30rem;
      }
    }
  }

  &__item {
    &:not(:first-child) {
      margin-top: 30rem;
    }
  }

  &__more {
    margin-right: -10rem;
  }
}
.tippy-popper {
  z-index: 9999 !important;
}
</style>