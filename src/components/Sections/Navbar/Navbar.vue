<template>
  <div :class="styles.navbar1">
    <div :class="styles.navbar">
      <router-link :class="styles.navbar_logolink" to="/">
        <img
          src="@/assets/images/logo.png"
          alt="Logo"
          :class="styles.navbar_logo"
        />
      </router-link>
      <div :class="styles.navbar_list1">
        <ul :class="styles.navbar_list">
          <li :class="styles.navbar_list_item" v-for="item in menu">
            <router-link
              :class="styles.navbar_list_link"
              :to="item.url"
              :key="item.id"
              v-if="item.type === 'link'"
              >{{ item.name }}
            </router-link>
          </li>
        </ul>
      </div>
      <div :class="styles.navbar_buttons">
        <div :class="styles.navbar_buttons_buttonone">Buy template</div>
        <div :class="styles.navbar_buttons_buttontwo">
            <img src="@/assets/images/shop.png" alt="Shop" :class="styles.navbar_buttons_buttontwo_img">
            <span>Cart</span>
            <div :class="styles.navbar_buttons_buttontwo_num">0</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store/index.js'
import Container from "@/components/UI/Container/Container.vue";
import styles from "./Navbar.module.scss";
export default {
  name: "Navbar",
  components: {
    Container,
  },
  computed:{
    menu: () => store?.state?.nav?.menu
  },
  mounted(){
    console.log(store?.state);
  },
  data() {
    return {
      styles,
      
    };
  },
};
</script>
