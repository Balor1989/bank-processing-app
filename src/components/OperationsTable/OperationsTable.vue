<template>
  <h3 class="center" v-if="request.length === 0">There are no operations</h3>
  <table v-else>
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Phone</th>
        <th>Amount</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ["request"],
};
</script>

<style></style>
