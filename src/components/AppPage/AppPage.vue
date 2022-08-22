<template>
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
