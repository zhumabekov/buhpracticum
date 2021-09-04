<template>
  <header>
    <div class="logo__block">
      <div class="menu" @click="toogleNav">
        <svg viewBox="0 -53 384 384" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/><path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/><path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/></svg>
      </div>
      <div class="logo">buhPracticum</div>
    </div>
    <div class="form">
      <div>LogIn</div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    modelValue: Boolean
  },
  methods: {
    toogleNav(){
      this.$emit('update:modelValue', !this.modelValue)
    }
  }
}
</script>

<style>
  header{
    display: flex;
    height: 50px;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
  }
  .logo__block{
    width: 120px;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
  }
</style>