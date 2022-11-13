<template>
  <div>

    <!-- Sidebar -->
    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasExampleLabel">玟珄官方網站</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <div>
          大家好，我是玟珄，大家可以叫我小慶
        </div>
        <div v-for="(item, key) in data2" :key="key">
          <a type="button" :href="item.link" class="d-flex p-2 btn " :class="`btn-outline-`+item.color">
            {{ item.name }}
          </a>
        </div>
      </div>
    </div>

    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">

        <!-- show sidebar -->
        <button class="btn btn-outline-secondary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
          <font-awesome-icon :icon="['fas', 'angles-right']" class="icon alt" />
        </button>

        <a class="navbar-brand" href="#">玟珄個人網站</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item" v-for="(item, key) in data" :key="key">
              <router-link v-if="item.name" class="nav-link" :to="item.link">
                <div class="text-dark">
                  <font-awesome-icon :icon="item.icon" class="icon alt" style="color: #000000;" />
                  {{ item.name }}
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <div class="container">
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/FooterSection.vue'
export default {
  name: 'App',
  components: {
    Footer
  },
  data () {
    return {
      data: [
        {
          name: '首頁',
          link: '/',
          icon: ['fas', 'house-user']
        },
        {
          name: '關於我',
          link: '/about',
          icon: ['fas', 'circle-info']
        },
        {
          name: '我的 YouTube',
          link: '/yt',
          icon: ['fab', 'youtube']
        },
        {
          name: '分享程式',
          link: '/app',
          icon: ['fas', 'hammer']
        },
        {
          name: '倒數',
          link: '/countdown',
          icon: ['fas', 'stopwatch-20']
        },
        {
          name: '',
          link: '',
          icon: ['', '']
        }
      ],
      data2: [
        {
          name: 'Facebook',
          link: '',
          color: 'primary'
        },
        {
          name: 'YouTube',
          link: '',
          color: 'danger'
        },
        {
          name: 'Discord',
          link: '',
          color: 'primary'
        },
        {
          name: 'Line',
          link: '',
          color: 'success'
        },
        {
          name: 'Telegram',
          link: '',
          color: 'primary'
        },
        {
          name: 'Github',
          link: '',
          color: 'secondary'
        },
        {
          name: 'Gitlab',
          link: '',
          color: 'secondary'
        },
        {
          name: 'Twitter',
          link: '',
          color: 'primary'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
// 載入所有 scss 包含 bootstrap...等等
@import './assets/all.scss';

body {
  // background-image: linear-gradient(0deg,rgba(19,21,25,.5),rgba(19,21,25,.5)),url(assets/images/bg.webp);
  // color: #fff;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: 50%;
  background-size: cover;
  color: black;
}
p {
  text-align: justify;
}
</style>
