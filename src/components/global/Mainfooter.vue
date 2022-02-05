<template>
  <footer class="main-footer">
    <!-- To the right -->
    <div class="float-right d-none d-sm-inline">Dashboard</div>
    <!-- Default to the left -->
    <strong
      >Copyright &copy; {{ date }}
      <a href="https://adminlte.io">dev3la2.io</a>.</strong
    >
    All rights reserved.
  </footer>
</template>

<script>
export default {
  data() {
    return {
      date: new Date().getFullYear(),
    };
  },
};
</script>
