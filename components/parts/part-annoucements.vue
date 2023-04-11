<template lang="pug">
  .annoucements
    h3.annoucements__inner.h3 {{content.title}}
    part-back-nav-not-link.annoucements__nav(:nav="content.nav"  :active="navActive" mobile @change="changeNavActive")
      form-select-sort-index.favorites-ad__select(:key="sortKey"  :label="content.sortBy" :items="sortList" v-model="sort" :value="sort" noBorder)
    .annoucements__container
      .annoucements__select-all
        form-checkbox.annoucements__select-all(:checked="ADVERTISES_CHECKED_ALL" @change.native="changeAll" v-if="content.nav[navActive].id !== 0 && ADVERTISES.length > 0")
          span.color-gray.h6 {{content.selectAll}}
        form-select-sort-index.favorites-ad__select.mobile-visible(:key="sortKey"  :label="content.sortBy" :items="sortList" v-model="sort" :value="sort" noBorder)
      template(v-if="loadingPage")
      .annoucements__list
        item-annoucement.annoucements__item(
          v-for="(item, i) in ADVERTISES"
          :item="item"
          :key="i"
          :coordinates="{longitude:item.longitude,latitude:item.latitude}"
          :active-tab="navActive"
          @checked="SET_ADVERTISES_CHECKED(i)"
          @deactivate="deleteOrDeactivateOrActiveItem('deactivateOrActiveItem', item.id,'deactivate')"
          @active="deleteOrDeactivateOrActiveItem('deactivateOrActiveItem', item.id,'activate')"
          @deleteAdvertis="deleteOrDeactivateOrActiveItem('deleteOrDeactivateItem', item.id, 'delete')"
          @draft="deleteOrDeactivateOrActiveItem('deleteOrDeactivateItem', item.id, 'draft')"
          @moderation="deleteOrDeactivateOrActiveItem('deactivateOrActiveItem', item.id,'moderation')"
          @statistics="openStatistics(item)"
          :buttons="content.buttons"
          :left="content.left"
        )
        infinite-loading(:distance="20" :identifier="infiniteId"  @infinite="handleLoadMore")
          div(slot="no-results")
          div(slot="no-more")
          div(slot="spinner")
      .section-notifications__center(v-if="ADVERTISES.length === 0")
        part-not-notification.section-notifications__not-notification
      transition(name="fade")
        part-annoucement-panel.annoucements__panel(
          v-if="ADVERTISES_CHECKED.length > 0"
          @closePanel="SET_ADVERTISES_CHECKED_ALL()"
          :selected="ADVERTISES_CHECKED.length"
        )
          button-medium.annoucement-panel__btn(icon="delete"  blue small v-b-modal:modal-delete @click.native.prevent="deleteOrDeactivateOrActiveItem('deleteOrDeactivateItem', null, 'delete')") {{content.buttons.delete}}
          button-medium.annoucement-panel__btn(icon="lightning-bolt" v-if="ADVERTISES_CHECKED.length === 1" v-b-modal.modal-tariffs blue small) {{content.buttons.saleFaster}}
          button-medium.annoucement-panel__btn(icon="setting" blue small v-if="ADVERTISES_CHECKED.length === 1" @click.prevent.native="changeProduct") {{content.buttons.settings}}
          button-medium.annoucement-panel__btn(blue small v-if="content.nav[navActive].id === 2" @click.prevent.native="deleteOrDeactivateOrActiveItem('deactivateOrActiveItem', ADVERTISES_CHECKED,'activate')") {{content.buttons.active}}
          button-medium.annoucement-panel__btn(blue small v-if="content.nav[navActive].id === 5" @click.prevent.native="deleteOrDeactivateOrActiveItem('deactivateOrActiveItem', ADVERTISES_CHECKED,'moderation')") {{content.buttons.active}}
          button-medium.annoucement-panel__btn(v-if="content.nav[navActive].id !== 5" blue small @click.native.prevent="deleteOrDeactivateOrActiveItem('deleteOrDeactivateItem', null, 'draft')") {{content.buttons.draft}}

          //button-medium.annoucement-panel__btn(icon="cross" v-if="content.nav[navActive].id === 1" blue small v-b-modal:modal-delete @click.native.prevent="deleteOrDeactivateOrActiveItem('deleteOrDeactivateItem', null, 'deactivate')") Deactivate
    modal-tariffs
    modal-delete(
      v-show="status"
      @deleteItem="changeItem"
      :title="status?content.modals[status && status ==='moderation' ? 'activate' : status || 'delete'].title : ''"
      :desc="status ? content.modals[status && status ==='moderation' ? 'activate' : status || 'delete'].description : ''"
      :btn="status ? content.modals[status && status ==='moderation' ? 'activate' : status || 'delete'].button : ''"
      :class="{status:true}"
      :status="status"
    )
    modal-panel
      .modal-panel__item
        button-border.modal-panel__btn(icon="zipper" v-if="ADVERTISES_CHECKED.length === 1" v-b-modal.modal-tariffs blue BigIcon) {{content.buttons.saleFaster}}
      .modal-panel__item
        button-border.modal-panel__btn(icon="chatBorder" BigIcon gray) {{content.buttons.chat}}
      .modal-panel__item
        button-border.modal-panel__btn(icon="delete" BigIcon gray v-b-modal:modal-delete @click.native.prevent="deleteOrDeactivateOrActiveItem('deleteOrDeactivateItem', null, 'delete')") {{content.buttons.delete}}
      .modal-panel__item(v-if="ADVERTISES_CHECKED.length === 1")
        button-border.modal-panel__btn(icon="setting"   BigIcon gray v-b-modal:modal-delete @click.native.prevent="changeProduct") {{content.buttons.settings}}
      .modal-panel__item(v-if="content.nav[navActive].id === 2")
        button-border.modal-panel__btn(  BigIcon gray v-b-modal:modal-delete @click.native.prevent="deleteOrDeactivateOrActiveItem('deactivateOrActiveItem', ADVERTISES_CHECKED,'activate')") {{content.buttons.active}}
      .modal-panel__item(v-if="content.nav[navActive].id === 5")
        button-border.modal-panel__btn(  BigIcon gray v-b-modal:modal-delete @click.native.prevent="deleteOrDeactivateOrActiveItem('deactivateOrActiveItem', ADVERTISES_CHECKED,'moderation')") {{content.buttons.active}}
      .modal-panel__item
        button-border.modal-panel__btn(v-if="content.nav[navActive].id !== 5" BigIcon gray v-b-modal:modal-delete @click.native.prevent="deleteOrDeactivateOrActiveItem('deleteOrDeactivateItem', null, 'draft')") {{content.buttons.draft}}

</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  props: {
    content: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      loadingPage: false,
      navActive: 0,
      infiniteId: 0,
      sort: 0,
      sortKey: 0,
      status: '',
      i: null,
      functionName: ''
    };
  },
  created() {
    this.SET_TARIFFS()
    this.SET_PAGE_MODAL_STATISTIC()
  },
  watch: {
    sort() {
      this.getAdvertises()
    },
    '$i18n.locale'(val) {
      this.SET_PAGE_MODAL_STATISTIC()
    }
  },
  computed: {
    ...mapGetters({
      ADVERTISES: 'advertises/ADVERTISES',
      ADVERTISES_CHECKED: 'advertises/ADVERTISES_CHECKED',
      ADVERTISES_CHECKED_ALL: 'advertises/ADVERTISES_CHECKED_ALL',
    }),
    sortList() {
      return [
        {
          label: this.content.sortList[0].label,
          text: this.content.sortList[0].text,
          value: 'orderBy=updated_at&sortedBy=desc'
        },
        {
          label: this.content.sortList[1].label,
          text: this.content.sortList[1].text,
          value: 'orderBy=updated_at&sortedBy=asc'
        },
        {
          label: this.content.sortList[2].label,
          text: this.content.sortList[2].text,
          value: 'orderBy=price&sortedBy=desc'
        },
        {
          label: this.content.sortList[3].label,
          text: this.content.sortList[3].text,
          value: 'orderBy=price&sortedBy=asc'
        }
      ]
    },
  },
  methods: {
    ...mapActions({
      SET_PAGE_MODAL_STATISTIC: 'pages/SET_PAGE_MODAL_STATISTIC',
      SET_ADVERTISES: 'advertises/SET_ADVERTISES',
      SET_ADVERTISES_PAGE: 'advertises/SET_ADVERTISES_PAGE',
      SET_ADVERTISES_CHECKED: 'advertises/SET_ADVERTISES_CHECKED',
      SET_ADVERTISES_CHECKED_ALL: 'advertises/SET_ADVERTISES_CHECKED_ALL',
      SET_DEACTIVATE_OR_ACTIVE: 'advertises/SET_DEACTIVATE_OR_ACTIVE',
      SET_GO_TO_MODERATION: 'advertises/SET_GO_TO_MODERATION',
      SET_CHANGE_STATUS: 'advertises/SET_CHANGE_STATUS',
      SET_STATISTIC: 'product/SET_STATISTIC',
      SET_TARIFFS: 'tariffs/SET_TARIFFS',
    }),
    changeAll() {
      if (window.innerWidth > 580) this.panelOpen = true;
      else this.$root.$emit('bv::show::modal', 'modal-panel')
      this.SET_ADVERTISES_CHECKED_ALL(!this.ADVERTISES_CHECKED_ALL)
    },
    changeProduct() {
      const {slug} = this.ADVERTISES.find(item => item.id === this.ADVERTISES_CHECKED[0])
      this.$router.push(this.$changeRoute(`/create-ad/${slug}`))
      this.SET_ADVERTISES_CHECKED_ALL()
    },
    openStatistics(item) {
      const statistic = {
        favorite: item.added_favorites,
        view: item.show_details,
        call: item.show_phone
      }
      this.SET_STATISTIC(statistic)
      this.$root.$emit('bv::show::modal', 'modal-statistic')
    },
    changeNavActive(index) {
      this.navActive = index
      this.getAdvertises()
      this.SET_ADVERTISES_CHECKED_ALL()
    },
    getAdvertises() {
      this.SET_ADVERTISES_PAGE()
      this.infiniteId++
    },
    handleLoadMore($state) {
      const status = this.content.nav[this.navActive].id
      const sort = this.sortList[this.sort].value || 'orderBy=id&sortedBy=desc'
      this.SET_ADVERTISES({sort, status})
        .then(loadState => {
          if (loadState) $state.loaded()
          else $state.complete()
        })
    },
    deleteOrDeactivateOrActiveItem(functionName, i, status) {
      this.i = i
      this.status = status
      this.$nextTick(() => this.$root.$emit('bv::show::modal', 'modal-delete'))
      this.functionName = functionName
    },
    changeItem() {
      const i = this.i
      const status = this.status
      if (this.functionName === 'deactivateOrActiveItem') {
        this.SET_DEACTIVATE_OR_ACTIVE({i, status})
      } else if (this.functionName === 'deleteOrDeactivateItem') {
        this.SET_CHANGE_STATUS({status, i})
      } else if (this.functionName === 'SET_GO_TO_MODERATION') {
        this.SET_GO_TO_MODERATION(i)
      }
    }
  },
  beforeDestroy() {
    this.getAdvertises()
  },
}
</script>
