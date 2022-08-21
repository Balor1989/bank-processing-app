<template>
  <h3 class="center medium" v-if="requests.length === 0">
    There are no operations
  </h3>
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
      <tr v-for="(req, idx) in requests" :key="req.id">
        <td>{{ idx + 1 }}</td>
        <td>{{ req.name }}</td>
        <td>{{ req.phone }}</td>
        <td>{{ req.amount }}</td>
        <td>{{ req.status }}</td>
        <td>
          <router-link
            v-slot="{ navigate }"
            custom
            :to="{ name: 'Request', params: { id: req.id } }"
            ><button class="btn" @click="navigate">Open</button>
          </router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ["requests"],
};
</script>

<style></style>
