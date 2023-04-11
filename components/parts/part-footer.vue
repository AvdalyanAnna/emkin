<template lang="pug">
	footer.footer
		.footer__wrap.wrap
			.footer__top.flex.flex_vertical.flex_justify
				NuxtLink.footer__logo(:to="$changeRoute()")
					img(src="~/assets/img/logo.svg")
				ul.footer__nav.flex.flex_right
					li.footer__nav-item
						NuxtLink.footer__nav-link.link(to="#") Money Back
					li.footer__nav-item
						NuxtLink.footer__nav-link.link(to="#") Bidding & buying
					li.footer__nav-item
						NuxtLink.footer__nav-link.link(to="#") Government
					li.footer__nav-item
						NuxtLink.footer__nav-link.link(to="#") Jobs
					li.footer__nav-item
						NuxtLink.footer__nav-link.link(to="#") Money Back
					li.footer__nav-item
						NuxtLink.footer__nav-link.link(to="#") Bidding & buying
					li.footer__nav-item
						NuxtLink.footer__nav-link.link(to="#") Developers
					li.footer__nav-item
						NuxtLink.footer__nav-link.link(to="#") Security center
			.footer__bottom.flex.flex_vertical.flex_justify
				module-social.footer__social
				.footer__list.flex
					.footer__item.mobile-hidden
						.footer__copyright Copyright © 1995-2022
					.footer__item.mobile-visible
						a.footer__link(href="#") Contacts
					.footer__item.mobile-visible
						a.footer__link(href="#") Support
					.footer__item
						a.footer__link(href="#") Policy privicy
					.footer__item
						a.footer__link(href="#") Term of Use
					.footer__item
						a.footer__dev(href="https://bairamov.studio" target="_blank")
							span Made with
							svg-icon.footer__dev-heart(name="heart")
							span by Bairamov Studio
</template>

<script>
export default {
}
</script>

<style lang="scss">
.footer{
	width: 100%;

	@include small-tablet {
		margin-bottom: 48rem;
	}

	&__top {
		padding: 23rem 0;
		border-top: 1px solid rgba(195, 200, 203, 0.6);
		flex-wrap: nowrap;

		@include large-mobile {
			padding: 0 0 20rem 0;
			border-top: 0;
		}
	}
	&__logo {
		flex: 0 0 auto;
		width: 132rem;
		@include large-mobile {
			width: 120rem;
		}
	}
	&__nav {
		list-style: none;
		flex: 1 1 auto;
		margin-right: -25rem;
		&-item {
			margin: 5rem 25rem;
		}

		@include large-desktop {
			margin-right: -15rem;
			&-item {
				margin: 5rem 15rem;
			}
		}

		@include large-tablet {
			display: none;
		}
	}

	&__bottom {
		padding: 20rem 0;
		border-top: 1px solid rgba(195, 200, 203, 0.6);
	}

	&__list {
		margin-top: -5rem;
		margin-bottom: -5rem;
		@include large-mobile {
			justify-content: space-between;
			width: 100%;
		}
	}

	&__item {
		margin-top: 5rem;
		margin-bottom: 5rem;
		&:not(:first-child) {
			margin-left: 50rem;
		}

		@include large-tablet {
			&:last-child {
				position: absolute;
				right: var(--wrapper-offset);
				top: 28rem;
				margin: 0;
			}
		}

		@include small-tablet {
			&:not(:first-child) {
				margin-left: 30rem;
			}
		}

		@include large-mobile {
			margin-left: 0!important;

			&:last-child {
				top: 4rem;
			}
		}
	}
	.mobile-visible {
		display: none;
	}

	&__copyright {
		color: rgba(6, 36, 57, 0.5);
	}
	&__link {
		color: rgba(6, 36, 57, 0.5);
		text-decoration: underline;
		transition: ease .2s;

		&:hover {
			color: $blue;
		}
	}

	&__dev {
		display: inline-flex;
		align-items: center;
		font-weight: 600;
		&-heart {
			width: 14rem;
			height: 13rem;
			fill: $red;
			margin: 0 4rem;
			margin-top: -1px;
		}

		@include large-mobile {
			&-heart {
				width: 12rem;
				height: 11rem;
				margin: 0 2px;
			}
		}
	}

	&__social {
		@include large-mobile {
			display: none;
		}
	}

	@include large-mobile {
		.mobile-visible {
			display: block;
		}
		.mobile-hidden {
			display: none;
		}
	}
}
</style>