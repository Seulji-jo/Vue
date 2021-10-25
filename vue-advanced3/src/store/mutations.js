export default {
  SET_DATAS(state, datas) {
    // state[name] = data;
    state.lists = datas;
  },
  SET_NEWS(state, newsDatas) {
    state.news = newsDatas;
  },
  SET_ASK(state, askDatas) {
    state.ask = askDatas;
  },
  SET_JOBS(state, jobsDatas) {
    state.jobs = jobsDatas;
  },
  SET_USER(state, userInfo) {
    state.user = userInfo;
  },
  SET_ITEM(state, itemDatas) {
    state.item = itemDatas;
  }
}