import {
	fetchDatas,
	fetchNewsList,
	fetchAskList,
	fetchJobsList,
	fetchUserInfo,
	fetchItemData,
} from '../api/index';
export default {
	// #2
	async FETCH_DATAS({ commit }, name) {
		// try {
		// 	const { data } = await fetchDatas(name);
		// 	commit('SET_DATAS', data);
		// 	return data;
		// } catch (e) {
		// 	console.log(e);
		// }
		const res = await fetchDatas(name);
		commit('SET_DATAS', res.data);
		return res;
		// // #3
		// return fetchDatas(name)
		// .then(res => {
		//   // #4
		//   console.log(4);
		//   commit('SET_DATAS', res.data)
		//   return res
		// })
		// .catch(error => {
		//   console.log(error)
		// })
	},
	async FETCH_NEWS({ commit }) {
		try {
			const { data } = await fetchNewsList();
			commit('SET_NEWS', data);
			return data;
		} catch (e) {
			console.log(e);
		}
	},
	async FETCH_ASK({ commit }) {
		// try {
		// 	const { data } = await fetchAskList();
		// 	commit('SET_ASK', data);
		// 	return data;
		// } catch (error) {
		// 	console.log(error);
		// }
		// api에서 에러처리를 했기때문에 try&catch문을 안씀
		const res = await fetchAskList();
		commit('SET_ASK', res.data);
		return res;
	},
	async FETCH_JOBS({ commit }) {
		// 캡틴판교는 action함수 말고 api에 try&catch를 넣어 처리한다.
		// 비즈니스 로직을 처리하는 action보단 api에서 하고 들어오면 깔끔하다.
		// 저는 보통 액시오스를 사용하면 인터셉터라는 것을 이용해서 API 함수의 공통 에러 처리를 한 곳에서 진행합니다. 그리고 API에서 발생한 에러는 모두 컴포넌트 단으로 올려서 화면에서 바로 제어하는 는 에러 처리 패턴을 좋아합니다. 정리하자면, 이 강의에서는 액시오스 고급 패턴인 인터셉터를 다루지 않아서 에러 처리가 번거롭게 두 곳으로 나뉘어져 있다고 이해하시면 될 것 같아요 :)
		try {
			const { data } = await fetchJobsList();
			commit('SET_JOBS', data);
			return data;
			// 컴포넌트 단에서 공통화를 위해 response자체를 리턴하는 경우가 많다.
			// const res = await fetchJobsList();
			// commit('SET_JOBS', res.data);
			// return res;
		} catch (error) {
			console.log(error);
		}
	},
	async FETCH_USER({ commit }, userName) {
		try {
			const { data } = await fetchUserInfo(userName);
			commit('SET_USER', data);
			return data;
		} catch (e) {
			console.log(e);
		}
	},
	async FETCH_ITEM({ commit }, itemId) {
		try {
			const { data } = await fetchItemData(itemId);
			commit('SET_ITEM', data);
			return data;
		} catch (e) {
			console.log(e);
		}
	},
};
