<template>
  <div class="container">
    <h1>JSON Tree Viewer</h1>

    <p>Simple JSON Viewer that runs completely on-client. No data exchange</p>

    <button class="button">Load JSON</button>
  </div>
</template>

<script>
</script>

<style scoped lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
    width: 100%;
    height: 100vh;

    .button { padding: 6px 12px; }
  }

</style>
