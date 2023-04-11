<template lang="pug">
	section.section-photo
		button-primary.section-photo__btn(blue icon="plusBig" v-b-modal.modal-photo)
			| Add a photo
		.section-photo__list.flex
			item-photo.section-photo__item(
				v-for="(item, i) in list"
				:key="i"
				:name="item.name"
				:size="item.size"
				:img="item.img"
				@showPanel="panel"
				:class="{isActive:number == i}"
				@click.native="change(i)"
			)

		transition(name="fade")
			part-annoucement-panel.section-photo__panel(v-if="panelOpen" @closePanel="panelOpen = false" modalName="modal-photo-panel")
				button-medium.annoucement-panel__btn(icon="delete" blue small) Delete
				button-medium.annoucement-panel__btn(icon="penEdit" blue small) Edit
				button-medium.annoucement-panel__btn(icon="copy" blue small) Copy

		modal-panel(id="modal-photo-panel")
			.modal-panel__item
				button-border.modal-panel__btn(icon="closeBig" BigIcon gray) Delete
			.modal-panel__item
				button-border.modal-panel__btn(icon="penEdit" BigIcon gray) Edit
			.modal-panel__item
				button-border.modal-panel__btn(icon="copy" BigIcon gray) Copy
		modal-photo
</template>

<script>
export default {
	data(){
		return{
			number: 1,
			i: 1,
			panelOpen: false,
			list: [
				{
					name: 'SLR Magic097432.PNG',
					size: '77 MB'
				},
				{
				},
				{
				},
				{
				},
				{
				},
				{
				},
				{
				},
				{
				},
				{
				},				
			],
		}
	},
	methods:{
		change(i) {
			this.number = i;
		},
		panel() {
	    	this.panelOpen = true;
	    },
	}
}
</script>

<style lang="scss">
.section-photo {
	margin-top: 30rem;
	padding-bottom: 60rem;

	@include large-mobile {
		margin-top: 15rem;
	}

	&__btn {
		min-width: 190rem;
		@include large-mobile {
			min-width: 180rem;
		}
	}

	&__list {
		@include items(6, 8);
		padding-top: 8rem;

		@include large-desktop {
			@include items(5, 8);
		}
		@include large-tablet {
			@include items(3, 8);
		}
		@include large-mobile {
			@include items(2, 3);
			padding-top: 3rem;
		}
	}

	&__item {
		margin-top: 30rem;
		@include large-mobile {
			margin-top: 20rem;
		}
	}
	&__panel {
		margin: 30rem 0 0 0;
		@include large-mobile {
			margin-top: 20rem;
		}
	}
}
</style>