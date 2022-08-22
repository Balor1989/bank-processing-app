<template>
  <h3 class="center medium" v-if="requests.length === 0">
    There are no operations
  </h3>
  <table v-else class="table table-striped">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Phone</th>
        <th scope="col">Amount</th>
        <th scope="col">Status</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(req, idx) in requests" :key="req.id">
        <td>{{ idx + 1 }}</td>
        <td>{{ req.name }}</td>
        <td>{{ req.phone }}</td>
        <td>{{ amountFormat(req.amount) }}</td>
        <td><AppStatus :type="req.status" /></td>
        <td>
          <router-link
            v-slot="{ navigate }"
            custom
            :to="{ name: 'Request', params: { id: req.id } }"
            ><button class="btn btn-primary" @click="navigate">Open</button>
          </router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { amountFormat } from "@/utils/amountFormat";
import AppStatus from "../AppStatus";
export default {
  props: ["requests"],
  setup() {
    return { amountFormat };
  },
  components: { AppStatus },
};
</script>

<style scoped>
.btn {
  padding: 0 8px;
}

td,
th {
  text-align: center;
  padding: 8px 15px;
}
</style>
