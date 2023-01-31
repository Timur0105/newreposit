<template>
  <div :class="styles.button">
    <slot/>
  </div>
</template>

<script>
import styles from './Button.module.scss'
export default {
    name: 'Button',
    data(){
        return{
            styles
        }
    }
}
</script>

<style>

</style>