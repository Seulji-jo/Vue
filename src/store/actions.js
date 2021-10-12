import { fetchDatas, fetchNewsList, fetchAskList, fetchJobsList } from '../api/index'
export default {
  async FETCH_DATAS({commit}, menu) {
    try {
      const res = await fetchDatas(menu);
      const datas = {
        menu,
        data: res.data
      }
      commit('SET_DATAS', datas)
    } catch(e) {
      console.log(e);
    }
  },
  async FETCH_NEWS({commit}) {
    try {
      const {data} = await fetchNewsList();
      commit('SET_NEWS', data)
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
  }
}