import { createStore } from 'vuex'
import { nav } from '@/store/nav'
import { group } from './group'
export default createStore({
  state: {
  },
  actions: {
  },
  modules:{
    nav,
    group
  }
})
