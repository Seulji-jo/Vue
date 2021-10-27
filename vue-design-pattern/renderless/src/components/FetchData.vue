<script>
import axios from 'axios';

export default {
  props: ['url'],
  data() {
    return {
      response: null,
      loading: true,
    }
  },
  async created() {
    try {
      const response = await axios.get(this.url)
      this.response = response.data;
      this.loading = false; // data를 다 받아왔기 때문에 loading을 false로 값을 주어 멈춘다.
    } catch (error) {
      alert('[ERROR] fetching the data', error);
      console.log(error);
    }
  },
    // 기본적으로 render라는 것은 컴포넌트를 그리는 것!
  render() {
    // 컴포넌트의 표현식이라고 하는(html, css가 아닌) 데이터만 넘겨준다.(등록한 곳에 노출한다)
    return this.$scopedSlots.default({
      response: this.response,
      loading: this.loading,
    })
  }
}
</script>