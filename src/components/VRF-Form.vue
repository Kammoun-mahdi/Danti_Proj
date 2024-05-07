<template>
  <div class="vrf_container">
    <h1 class="text-center m-4">{{ title }}</h1>
    <div class="w-75 m-auto 0">
      <div v-if="showForm">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label"
            >VRF Name:</label
          >
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput2" class="form-label">RD:</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput2"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput3" class="form-label"
            >RT Export:</label
          >
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput3"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput4" class="form-label"
            >RT Import:</label
          >
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput4"
          />
        </div>
      </div>
      <div v-else>
        <div class="mb-3">
          <label for="exampleFormControlInput5" class="form-label"
            >PE Router:</label
          >
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput5"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput6" class="form-label"
            >VRF Name:</label
          >
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput6"
          />
        </div>
      </div>
      <div class="w-100">
        <button
          class="w-100"
          :class="[showForm ? 'btn btn-primary' : 'btn btn-danger']"
        >
          {{ showForm ? "Build" : "Remove" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      showForm: true,
    };
  },
  methods: {
    updateTitle() {
      this.title = this.title.replace(/_/g, " ");
    },
    updateShow() {
      this.showForm = this.$route.params.id === "Build_VRF";
    },
  },
  created() {
    this.title = this.$route.params.id;
    this.updateTitle();
    this.updateShow();
  },

  watch: {
    $route() {
      this.title = this.$route.params.id;
      this.updateTitle();
      this.updateShow();
    },
  },
};
</script>

<style scoped>
.vrf_container {
  margin: 80px auto;
  border-radius: 5px;
  margin-left: 35rem;
  width: 50%;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  padding: 2rem 0;
  background-color: #ebeeff;
}

label {
  font-weight: 500;
}

h1 {
  color: #434656;
}
</style>
