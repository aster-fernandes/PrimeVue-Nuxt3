import PrimeVue from "primevue/config";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import DataTable from "primevue/datatable";
import Column from "primevue/column";

export default defineNuxtPlugin((nuxtApp) => {
  // Doing something with nuxtApp
  nuxtApp.vueApp.use(PrimeVue, { ripple: true });
  nuxtApp.vueApp.component("PrimeVueButton", Button);
  nuxtApp.vueApp.component("PrimeVueInputText", InputText);
  nuxtApp.vueApp.component("PrimeVueDataTable", DataTable);
  nuxtApp.vueApp.component("PrimeVueColumn", Column);
});
