<template>
	<div id="app">
		<ToolBar />
		<transition name="page">
			<router-view></router-view>
		</transition>
		<Spinner :loading="loadingStatus" />
	</div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';
import Spinner from './components/Spinner.vue';
import bus from './utils/bus';

export default {
	components: {
		ToolBar,
		Spinner,
	},
	data() {
		return {
			loadingStatus: false,
		};
	},
	methods: {
		startSpinner() {
			this.loadingStatus = true;
		},
		endSpinner() {
			this.loadingStatus = false;
		},
	},
	created() {
		// bus.$on('start:spinner', () => this.loadingStatus = true)
		bus.$on('start:spinner', this.startSpinner);
		bus.$on('end:spinner', this.endSpinner);
		// env에서 데이터를 가져올때
		console.log(process.env.VUE_APP_TITLE);
	},
	beforeDestroy() {
		bus.$off('start:spinner', this.startSpinner);
		bus.$off('end:spinner', this.endSpinner);
	},
};
</script>

<style>
body {
	padding: 0;
	margin: 0;
}

a {
	color: #34495e;
	text-decoration: none;
}
a:hover {
	color: #42b883;
	text-decoration: underline;
}
a.router-link-exact-active {
	text-decoration: underline;
}

/* Router Transition */
/* https://kr.vuejs.org/v2/guide/transitions.html */

.page-enter-active,
.page-leave-active {
	transition: opacity 0.3s;
}
.page-enter, .page-leave-to /* .page-leave-active below version 2.1.8 */ {
	opacity: 0;
}
</style>
