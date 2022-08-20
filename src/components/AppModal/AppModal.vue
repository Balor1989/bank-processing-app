<template>
  <div
    class="modal fade"
    id="homeModal"
    tabindex="-1"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    aria-labelledby="modalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title medium" id="modalLabel">{{ title }}</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <ModalBody />
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="submit" class="btn btn-success">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ModalBody from "../ModalBody";
export default {
  props: {
    title: {
      type: String,
    },
  },
  components: { ModalBody },
};
</script>

<style>
.modal-content {
  background-color: rgb(231, 222, 222);
}
</style>
