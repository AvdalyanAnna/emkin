<template lang="pug">
	.chat-table(:class="Mods")
		table
			thead.color-gray
				tr
					th Title
					th Description
					th Status
					th Date
			tbody
				tr(v-for="(row, i) in rows" :key="i")
					td {{row.title}}
					td
						.chat-table__desc {{row.desc}}
					td {{row.status}}
					td 
						.chat-table__date
							.chat-table__text {{row.date}}
							button-switcher.chat-table__switcher(:items="switchers" light :name="`name${i}`" )
</template>

<script>
export default {
	props: {
		moderator: {
			type: Boolean,
			default: false
		},
		rows: {
			type: Array,
			default: () => ([
			])
		},
	},
	data(){
		return{
			switchers: [
				{
					value: 'Close',
					text: 'Close'
				},
				{
					value: 'Check',
					text: 'Check',
					checked: true
				}
			],
		}
	},
	computed: {
		Mods(){
			return {
				'users-table_moderator': this.moderator,
			}
		}
	}
}
</script>

<style lang="scss">
.chat-table{
	table {
		width: 100%;
	}
	th {
		font-weight: 500;
		text-align: left;
		padding-bottom: 18rem;
	}
	th, td {
		border-bottom: 1px solid $light-gray;
		&:last-child {
			width: 35%;
		}
		&:nth-child(3) {
			width: 22%;
		}
	}
	td {
		padding: 15rem 0;
		font-size: 15rem;
	}

	&__date {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	&__switcher {
		margin-left: 10rem;

		@include large-mobile {
			display: none;
		}
	}

	&__desc {
		max-width: 241rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

}
</style>