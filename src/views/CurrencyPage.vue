<template>
  <div class="home">
    <h4>{{titlePage}}</h4>
    <CurrencyTable />
  </div>
</template>

<script>
  import CurrencyTable from "../components/CurrencyTable";

  export default {
    name: 'CurrencyPage',
    data: () => ({
      titlePage: 'таблица валют: ',
    }),
    components: { CurrencyTable },

  }
</script>
