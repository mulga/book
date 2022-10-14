<template>
  <div class="login_register_container">
    <h3 class="text-2xl text-center mb-3">Register</h3>
    <input type="text" placeholder="Fullname" class="input mb-3" />
    <input type="text" placeholder="Username" class="input mb-3" />
    <input type="password" placeholder="Password" class="input mb-3" />
    <button class="default-button">Register</button>
    <span class="text-center mt-3 text-sm">
      I'have already an account,
      <a href="#" class="text-red-900 hover:text-black">Login</a>
    </span>
  </div>
</template>

<script>
export default {
  name: "RegisterPage",
};
</script>

<style scoped></style>
