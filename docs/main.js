import Vue from 'vue'

import MainView from './views/my_test'

const app = new Vue({
	components: {
		MainView
	},

	mounted() {
		this.$el.className = 'loaded'
	}
}).$mount('#app')
