<template lang="pug">
	b-modal(
		id="modal-photo" 
		size="photo-size" 
		modal-class="modal-photo" 
		body-class="modal-photo__body" 
		header-class="modal-photo__header"
		footer-class="modal-photo_footer"
		centered
		:hide-footer="true"
	)
	
		template(#modal-header='{ close }')
			button-close.modal__close(@click.native='close()')
		h3.modal-photo__title.h3.mobile-visible {{title}}
		.modal-photo__row
			.modal-photo__column.modal-photo__column_left
				.modal-photo__img
					.modal-photo__img-icon
						svg-icon(name="image")
				.modal-photo__list
					.modal-photo__item.h6(v-for="(item, i) in list" :key="i")
						.modal-photo__item-label.color-gray {{item.label}}
						.modal-photo__item-text {{item.text}}

			.modal-photo__column.modal-photo__column_right
				h3.modal-photo__title.h3.mobile-hidden {{title}}
				form.modal-photo__form(action="")
					.modal-photo__field
						label.modal-photo__label.h4 Атрибуты alt
						form-input.modal-photo__input(placeholder="Alexander")
						.modal-photo__text
							| Опишите назначение изображения. Оставьте пустым, если изображение является только элементом декора
					.modal-photo__field
						label.modal-photo__label.h4 Header
						form-input.modal-photo__input(placeholder="example@gmail.com")
					.modal-photo__field
						label.modal-photo__label.h4 Подпись
						form-input.modal-photo__input
					.modal-photo__field
						label.modal-photo__label.h4 Description
						form-textarea.modal-photo__textarea(placeholder="Tell us about the product")
					.modal-photo__field
						.modal-photo__user.flex.flex_bottom
							.modal-photo__user-label.h4 User
							.modal-photo__user-text.color-gray.p {{user}}
					.modal-photo__buttons
						.modal-photo__buttons-wrap.flex.flex_right
							button-primary.modal-photo__delete(gray icon="close" to="#") Delete
							button-primary.modal-photo__btn(blue) Send form
</template>
<script>
export default{
	props: {
		title: {
			type: String,
			default: 'Заголовок'
		},
		user: {
			type: String,
			default: 'Alexandr'
		},
		list: {
			type: Array,
			default: () => ([
				{
					label: 'Имя файла',
					text: 'name1.jpeg'
				},
				{
					label: 'Тип файла',
					text: 'image/jpeg'
				},
				{
					label: 'Загружен',
					text: '22.04.2022'
				},
				{
					label: 'Размер файла',
					text: '67 КБ'
				},
				{
					label: 'Размеры',
					text: '2400х1080'
				}
			]),
		},
	}
}
</script>
<style lang="scss">
.modal-photo {
	@include large-mobile {
		padding: 45rem 0 0 0!important;
		.modal-content {
			padding: 25rem 15rem 0 15rem;
		}
	}

	&__row {
		display: flex;

		@include large-mobile {
			flex-wrap: wrap;
		}
	}

	&__column {
		&_left {
			width: 287rem;
			min-width: 287rem;
			margin-right: 50rem;
		}
		&_right {
			width: 100%;
		}

		@include small-tablet {
			&_left {
				width: 250rem;
				min-width: 250rem;
				margin-right: 30rem;
			}
		}

		@include large-mobile {
			width: 100%;
			&_left {
				min-width: inherit;
				margin-right: 0;
			}
		}
	}

	&__img {
		position: relative;
		padding-top: div( 262, 287 ) * 100%;
		background: #EEF1FE;
		border-radius: 20rem;
		&-icon {
			width: 68rem;
			height: 68rem;
			position: absolute;
			left: 50%;
			top: 50%;
			margin: -34rem 0 0 -34rem;
			stroke: $blue;
			stroke-width: 1.5;
			fill: none;
			svg {
				height: 100%;
			}
		}

		@include large-mobile {
			padding-top: div( 262, 345 ) * 100%;
		}
	}

	&__list {
		margin-top: 20rem;
	}

	&__item {
		display: flex;
		justify-content: space-between;
		&:not(:first-child) {
			margin-top: 10rem;
		}
		&-label {
			font-weight: normal;
		}

		@include large-mobile {
			font-size: 16rem;
		}
	}

	&__title {
		font-family: 'Atyp Display';

		@include large-mobile {
			font-weight: 500;
			margin-bottom: 20rem;
		}
	}

	&__field {
		margin-top: 40rem;

		@include large-mobile {
			margin-top: 30rem;
		}
	}

	&__label {
		display: block;
		font-family: 'Gilroy';
		margin-bottom: 15rem;

		@include large-mobile {
			font-family: 'Atyp Display';
			font-size: 16rem;
			line-height: 1;
			margin-bottom: 10rem;
		}
	}
	&__text {
		margin-top: 10rem;
		max-width: 505rem;
		@include large-mobile {
			margin-top: 15rem;
		}
	}
	&__user {
		&-label {
			margin-right: 30rem;
		}
		@include large-mobile {
			&-label {
				font-family: 'Atyp Display';
				font-size: 16rem;
				line-height: 1.25;
				margin-right: 15rem;
			}
		}
	}
	&__buttons {
		margin-top: 40rem;

		@include large-mobile {
			margin: 30rem -15rem 0 -15rem;
			padding: 10rem 15rem;
			border-top: 1px solid $light-gray;
			&-wrap {
				@include items(2, 6);
			}
		}
	}
	&__delete {
		min-width: 133rem;
		@include large-mobile {
			min-width: inherit;
		}
	}
	&__btn {
		margin-left: 10rem;
		min-width: 192rem;

		@include small-tablet {
			min-width: 150rem;
		}

		@include large-mobile {
			min-width: inherit;
			margin-left: 6rem;
		}
	}
}
</style>