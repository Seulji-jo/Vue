import { fetchDatas, fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo, fetchItemData } from '../api/index'
export default {
  // #2
  async FETCH_DATAS({commit}, name) {
    try {
      const {data} = await fetchDatas(name);
      commit('SET_DATAS', data)
    } catch(e) {
      console.log(e);
    }

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
  async FETCH_NEWS({commit}) {
    try {
      const {data} = await fetchNewsList();
      commit('SET_NEWS', data)
      return data;
    } catch(e) {
      console.log(e);
    }
  },
  async FETCH_ASK({commit}) {
    try {
      const {data} = await fetchAskList();
      commit('SET_ASK', data)
    } catch (error) {
      console.log(error);
    }
  },
  async FETCH_JOBS({commit}) {
    try {
      const {data} = await fetchJobsList();
      commit('SET_JOBS', data)
    } catch (error) {
      console.log(error);
    }
  },
  async FETCH_USER({commit}, userName) {
    try {
      const {data} = await fetchUserInfo(userName);
      commit('SET_USER', data)
    } catch(e) {
      console.log(e);
    }
  },
  async FETCH_ITEM({commit}, itemId) {
    try {
      const {data} = await fetchItemData(itemId);
      commit('SET_ITEM', data)
    } catch(e) {
      console.log(e);
    }
  }
}