<template>
  <div class="m-auto 0 login_container">
    <div class="auth_logo_container">
      <h1 class="text-center mt-3 heading">Login</h1>
      <img src="/img/3S.png" alt="" class="imgs" />
    </div>
    <form class="m-auto 0 w-75" @submit.prevent="handleSubmit">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Username</label
        >
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          v-model="auth.username"
        />
        <p class="text-danger">
          {{ userErrorMsg }}
        </p>
      </div>

      <div class="mb-3">
        <label for="exampleFormControlInput2" class="form-label"
          >Password</label
        >
        <input
          type="password"
          class="form-control"
          v-model="auth.password"
          id="exampleFormControlInput2"
        />
        <p class="text-danger">
          {{ passErrorMsg }}
        </p>
      </div>

      <button type="submit" class="btn_submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      auth: {
        username: "",
        password: "",
      },
      userErrorMsg: "",
      passErrorMsg: "",
    };
  },

  methods: {
    handleSubmit() {
      if (!this.auth.username || !this.auth.password) {
        this.userErrorMsg = !this.auth.username ? "Username is Required" : "";
        this.passErrorMsg = !this.auth.password ? "Password is Required" : "";
      } else {
        localStorage.setItem("auth", JSON.stringify(this.auth));
        this.$router.push("/");
      }
    },
  },
};
</script>

<style scoped>
.auth_logo_container {
  padding: 10px;
  display: flex;
  justify-content: space-between;
  margin-bottom: -50px;
}
.heading {
  padding-left: 50px;
  font-size: 35px;
  letter-spacing: 0.5px;
}
.imgs {
  width: 150px;
  height: auto;
  object-fit: cover;
  border-radius: 5px;
}
.login_container {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  max-width: 500px;
  min-height: 400px;
  background-color: white;
  border-radius: 5px;
}

.btn_submit {
  border: none;
  background-color: #5e72c2;
  color: white;
  width: 100%;
  margin-top: 2em;
  border-radius: 5px;
  height: 30px;
  letter-spacing: 0.3px;
  transition: all 0.2s ease-in-out;
}

.btn_submit:hover {
  background-color: #ea7b22;
}
</style>
