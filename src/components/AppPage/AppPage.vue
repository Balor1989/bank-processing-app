<template>
  <div v-if="back">
    <router-link class="back bold" to="/">Go back</router-link>
  </div>
  <div class="card">
    <h2
      class="bold d-flex justify-content-between align-items-center main-title"
    >
      {{ title }} <slot name="header" />
    </h2>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    back: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {
    document.title = `${props.title}`;
  },
};
</script>

<style>
.main-title {
  margin-bottom: 25px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgb(187, 186, 186);
}
.back {
  display: inline-block;
  margin-left: 10px;
  margin-bottom: 10px;
  color: rgb(150, 148, 148);
  background-color: rgb(231, 222, 222);
  padding: 8px 12px;
  border-radius: 30px;
  transition: color 300ms ease;
}
.back:hover,
.back:focus {
  color: #000;
}
</style>
