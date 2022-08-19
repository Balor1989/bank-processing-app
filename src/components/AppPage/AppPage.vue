<template>
  <div class="card">
    <h1 class="bold d-flex justify-content-between main-title">
      {{ title }} <slot name="header" />
    </h1>
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
</style>
