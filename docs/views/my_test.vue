<template>
	<div id="main">
		<button @click="launch_test()"></button>
		<sweet-modal ref="test" :custom="list">
			<sweet-modal-tab v-for="(name, index) in list" :title="name+''+index" :id="'tab'+index">
				Contents of Tab {{index}}
			</sweet-modal-tab>
		</sweet-modal>
	</div>
</template>

<script>
	import { SweetModal, SweetModalTab } from '../../src/main'

	export default {
		name: 'MyView',
		mounted: function(){
			window.debug_this = this;
		},
		data: function(){
			return {
				list: [
				]
			};
		},

		components: {
			SweetModal,
			SweetModalTab,

		},

		methods: {
			launch_test: function(){
				this.$set(this, "list", [{
						name: 'test 1',
					},
					{
						name: 'test 2',
					},
					{
						name: 'test 3',
					},
					{
						name: 'test 4',
					},
					{
						name: 'test 5',
					}]);

				this.$refs.test.open();
			},
		}
	}
</script>

<style lang="scss">
	@import '../styles/colors';
	@import '../styles/mixins';

	nav.project-navigation {
		background: darken(color(header), 4%);

		ul li {
			$color: hsl(hue(color(header)), 12%, 40%);

			label {
				color: $color;
			}

			a {
				color: $color;

				&:hover {
					color: #fff;
				}

				&.active {
					background: color(header);
				}
			}
		}
	}

	a {
		color: color(pink);
	}

	header {
		background: color(header);
		color: #fff;

		padding: {
			top: 64px;
		}

		.meta,
		.pitch {
			@include max-width;
		}

		.meta {
			display: flex;
			align-items: flex-end;

			.logo {
				width: 64%;

				img {
					vertical-align: bottom;

					&.main {
						height: 28px;
					}

					&.for {
						margin-bottom: -4px;
						margin-left: 4px;
					}
				}
			}

			.action {
				width: 36%;
				text-align: right;

				a {
					color: color(pink);
					font-size: 16px;
					font-weight: 500;

					svg {
						vertical-align: middle;
						margin-top: -4px;

						width: 24px;
						height: 24px;
					}

					span.github {
						display: inline-block;
						vertical-align: middle;
						margin-left: 6px;

						font-size: 20px;
						font-weight: 600;

						color: #fff;
					}

					&:hover {
						color: #fff;
					}
				}
			}
		}

		.pitch {
			margin-top: 48px;

			h2 {
				@include mp0;
				font-weight: 400;
			}
		}
	}

	.header-decoration {
		height: 64px;
		background: linear-gradient(to top left, transparent 50%, color(header) 51%);

		margin: {
			bottom: 36px;
		}
	}

	p.grey {
		color: color(light-grey);
	}

	.content-section {

		&.install {
			background: color(light-background);

			padding: {
				top: 64px;
				bottom: 64px;
			}

			margin: {
				top: 32px;
				bottom: 32px;
			}

			> .content p:first-child {
				margin-top: -24px;
				margin-bottom: 56px;
			}
		}
	}

	footer {
		background: color(light-background);
		color: color(light-grey);
		font-size: 13px;

		display: flex;
		align-items: center;

		padding: {
			left: 32px;
			right: 32px;
			top: 20px;
			bottom: 20px;
		}

		.copyright {
			width: 60%;

			img {
				height: 16px;
				vertical-align: middle;
				margin-top: -1px;
			}
		}

		.links {
			width: 40%;
			text-align: right;

			a {
				display: inline-block;
				font-size: 14px;

				svg {
					width: 22px;
					height: 22px;

					vertical-align: middle;

					margin: {
						top: -3px;
						right: 4px;
					}
				}
			}
		}
	}
</style>
