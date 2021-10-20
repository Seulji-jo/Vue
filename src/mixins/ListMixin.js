import bus from '../utils/bus';
// mixin
export default {
	// 재사용할 컴포넌트 옵션 & 로직
	// async created() {
	// 	bus.$emit('start:spinner');
	// 	// this.$store.dispatch('FETCH_DATAS', this.$route.name)
	// 	// // #1
	// 	// .then(() => {
	// 	//   // #5
	// 	//   console.log(5);
	// 	//   console.log('fetched');
	// 	//   bus.$emit('end:spinner');
	// 	// }).catch(error => {
	// 	//   console.log(error);
	// 	// })

	// 	try {
	// 		await this.$store.dispatch('FETCH_DATAS', this.$route.name);
	// 		console.log('fetched');
	// 		bus.$emit('end:spinner');
	// 	} catch (e) {
	// 		console.log(e);
	// 	}
	// },
	mounted() {
		bus.$emit('end:spinner');
	},
};

// hoc
// export default function create() {
//   // 재사용할 컴포넌트 옵션
// }
