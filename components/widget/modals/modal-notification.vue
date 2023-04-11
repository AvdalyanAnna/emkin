<template lang="pug">
	b-modal(
		id="modal-notification"
		ref="modal-notification"
		size="notification-size"
		modal-class="modal-notification"
		body-class="modal-notification__body"
		header-class="modal-notification__header"
		footer-class="modal-notification__footer"
		centered
	)

		template(#modal-header='{ close }')
			button-close.modal__close(@click.native='close()')

		module-date.modal-notification__date(v-if="date") {{$dateFns.format(new Date(date), 'dd.MM.yyyy hh:mm ') }}
		.modal-notification__title.h4 {{title}}
		.modal-notification__content.content(v-html="content")

		template(#modal-footer='{ close }')
			button-primary.modal-notification__close(border @click.native='close()') Close
			.modal-notification__buttons
				button-primary.modal-notification__btn(gray @click.native='close()') Delete
				button-primary.modal-notification__btn(blue @click.native='close()') Actions

</template>

<script>
export default{
	props: {
		date: {
			type: String,
			default: '22.04.2022 - 11:22'
		},
		title: {
			type: String,
			default: 'Did you buy something? Leave a review about the seller 1'
		},
		content: {
			type: String,
			default: `
				<p>Pick it up from the pick-up point before 21:00 on Thursday, January 27, then the order will have to be canceled. Entering the pick—up point only with a mask and gloves - this will help.</p>
				<p>Pick it up from the pick-up point before 21:00 on Thursday, January 27, then the order will have to be canceled. Entering the pick—up point only with a mask and gloves - this will help.</p>
			`
		},
	}
}
</script>

<style lang="scss">
.modal-notification {
	.modal-content {
		padding: 50rem;
	}
	@include large-mobile {
		padding: 0!important;
		.modal-content {
			padding: 25rem 15rem;
		}
	}

	&__date {
		@include large-mobile {
			display: none!important;
		}
	}

	&__title {
		margin-top: 30rem;
		font-family: 'Gilroy';
		font-weight: 600;
		@include large-mobile {
			margin-top: 0;
			font-size: 20rem;
			max-width: calc( 100% - 60rem );
		}
	}

	&__content {
		margin-top: 20rem;
		color: $gray;
		line-height: 1.3;
		min-height: 220rem;
		@include large-mobile {
			margin-top: 15rem;
			min-height: 200rem;
			font-size: 16rem;
		}
	}

	&__footer {
		margin-top: 30rem;
		border: 0;
		@include large-mobile {
			margin-top: 25rem;
			display: block;
		}
	}
	&__close {
		min-width: 160rem;
		@include large-mobile {
			display: none;
		}
	}

	&__buttons {
		display: none;
		@include large-mobile {
			display: flex;
			@include items(2, 5);
		}
	}
}
</style>
