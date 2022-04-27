<template>
  <div class="container">
    <section>
      <div><strong>Input Text</strong></div>
      <PrimeVueInputText />
    </section>
    <section>
      <div><strong>Button with Ripple Effect test</strong></div>
      <PrimeVueButton label="Click" icon="pi pi-check"> </PrimeVueButton>
    </section>
    <section>
      <div><strong>Data Table</strong></div>
      <DataTable :data="dummyTableData" />
    </section>
  </div>
</template>

<script setup lang="ts">
import dummyTableData from "./data/dummyData";
const data = dummyTableData;
</script>

<style>
.container {
  background-color: #e5e5e5;
}
section {
  padding: 20px;
}
</style>
