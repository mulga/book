<template>
  <div class="login_register_container">
    <h3 class="text-sxl text-center mb-3">Login</h3>
    <input type="text" placeholder="Username" class="input mb-3" />
    <input type="password" placeholder="Password" class="input mb-3" />
    <button class="default-button">Login</button>
    <span class="text-center mt-3 text-sm"
      >I'm new,
      <a href="#" class="text-red-900 hover:text-black">Register</a>
    </span>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
};
</script>

<style scoped></style>
