<template>
  <header>
    <div class="menu--main">
      <router-link to="/" class="home"> Home </router-link>
      <nav class="navigation nav--main">
        <router-link
          v-for="menu of setNavigation"
          :key="menu.name"
          :to="menu.path"
        >
          {{ menu.name }}
        </router-link>
      </nav>
    </div>
    <ul v-if="isOpenSubMenu" class="navigation nav--sub">
      <li v-for="(subMenu, i) of subMenus" :key="i">
        <router-link :to="`/${mainRoutePath}/${subMenu.path}`">
          {{ subMenu.name }}
        </router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'LayoutLinks',
  data() {
    return {
      isOpenSubMenu: false,
      mainRoutePath: '',
      subMenus: [],
    };
  },
  computed: {
    setNavigation() {
      const { routes } = this.$router.options;
      return routes.filter(route => route.name);
    },
  },
  watch: {
    $route() {
      const { name, path } = this.$route;
      const { routes } = this.$router.options;
      const nav = routes.filter(route => route.name === name);
      this.mainRoutePath = path.split('/')[1];
      if (nav.length && nav[0].children) {
        this.subMenus = nav[0].children;
        this.openSubMenu(true);
      } else if (nav.length && !nav[0].children) {
        this.openSubMenu(false);
      }
    },
  },
  methods: {
    openSubMenu(boal) {
      this.isOpenSubMenu = boal;
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 100px;
  a {
    padding: 0 10px;
    color: #fff;
    text-decoration: none;
  }
}
.menu--main {
  height: 60px;
  padding: 0 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: cornflowerblue;

  font: {
    weight: 500;
  }
}
.navigation {
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  & .nav--main {
  }
  &.nav--sub {
    height: 40px;
    padding: 0 15%;
    background-color: #fff7e6;

    list-style: none;
    a {
      color: cornflowerblue;
      font: {
        size: 14px;
      }
    }
  }
}
</style>
