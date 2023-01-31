<template>
  <div :class="styles.container">
    <slot/>
  </div>
</template>

<script>
import styles from './Container.module.scss'
export default {
    name:'Container',
    data(){
        return{
            styles
        }
    }
}
</script>

<style>

</style>