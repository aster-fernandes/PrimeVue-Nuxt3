<script setup lang="ts">
interface DataProps {
  firstName: String;
  lastName: String;
  userId: String;
  accountCreationDate: String;
  accountStatus: String;
  activeSales: Number;
  completedSales: Number;
  dealerName: String;
  eamil: String;
}
interface Props {
  data: DataProps[];
}
const props = withDefaults(defineProps<Props>(), {});
</script>

<template>
  <div>
    <PrimeVueDataTable :value="data" responsiveLayout="scroll">
      <PrimeVueColumn
        bodyClass="column-body"
        field="firstName"
        header="First Name"
        headerClass="header-style"
      ></PrimeVueColumn>
      <PrimeVueColumn
        bodyClass="column-body"
        field="lastName"
        header="Last Name"
        headerClass="header-style"
      ></PrimeVueColumn>
      <PrimeVueColumn
        bodyClass="column-body"
        field="userId"
        header="User ID"
        :sortable="true"
        headerClass="header-style"
      ></PrimeVueColumn>
      <PrimeVueColumn
        bodyClass="column-body"
        field="accountCreationDate"
        header="Acct Creation Date"
        headerClass="header-style"
      ></PrimeVueColumn>
      <PrimeVueColumn
        bodyClass="column-body"
        field="accountStatus"
        header="Acct Status"
        headerClass="header-style"
      ></PrimeVueColumn>
      <PrimeVueColumn
        bodyClass="column-body"
        field="activeSales"
        header="Active Sales"
        headerClass="header-style"
      ></PrimeVueColumn>
      <PrimeVueColumn
        bodyClass="column-body"
        field="completedSales"
        header="Completed Sales"
        headerClass="header-style"
      ></PrimeVueColumn>
      <PrimeVueColumn
        bodyClass="column-body"
        field="dealerName"
        header="Dealer Name"
        headerClass="header-style"
      ></PrimeVueColumn>
      <PrimeVueColumn
        bodyClass="column-body"
        field="eamil"
        header="Email"
        headerClass="header-style"
      ></PrimeVueColumn>
    </PrimeVueDataTable>
  </div>
</template>

<style>
.column-body {
  border: 0px !important;
  background: #e5e5e5;
}
.header-style {
  background: transparent !important;
  border-color: black !important;
}
</style>
