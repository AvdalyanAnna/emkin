<template lang="pug">
	footer.small-footer
		.small-footer__wrap.wrap
			.small-footer__row.flex.flex_vertical.flex_justify
				.small-footer__column.small-footer__column_left
					ul.small-footer__nav.flex.p.color-gray
						li.small-footer__nav-item
							NuxtLink.small-footer__nav-link.link(to="#") Support page
						li.small-footer__nav-item
							NuxtLink.small-footer__nav-link.link(to="#") Beware of scammers!
						li.small-footer__nav-item
							NuxtLink.small-footer__nav-link.link(to="#") Contact page
				.small-footer__column.small-footer__column_right
					module-social.small-footer__social(small :list="socials")
</template>

<script>
export default {
	data(){
		return {
			socials: {
				fb: 'https://facebook.com/',
				instagram2: 'https://www.instagram.com',
				in: 'https://ca.linkedin.com/',
				telegram: 'https://www.telegram.com',
				whatsapp: 'https://www.whatsapp.com/',
				youtube2: 'https://www.youtube.com'
			}
		}
	}
}
</script>

<style lang="scss">
.small-footer{
	width: 100%;
	padding: 35rem 0;

	@include small-tablet {
		display: none;
	}

	&__nav {
		list-style: none;
		&-link {
			font-weight: 500;
		}
		&-item {
			&:not(:last-child) {
				margin-right: 56rem;
			}
		}
	}

	
}
</style>