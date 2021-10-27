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
      console.log(response);
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
      // scopedSlots으로 값을 올린다.
      // 하위 컴포넌트의 데이터를 상위 컴포넌트로 올려 상위 컴포넌트에서 상위컴포넌트로 올린 데이터에 접근 가능하게 만든다.
      response: this.response,
      loading: this.loading,
    })
  }
}
</script>