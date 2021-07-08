<template>
  <div class="home">
    <h4>{{titlePage}}</h4>
    <CurrencyTable :currency="currency" />
  </div>
</template>

<script>
  import CurrencyTable from "../components/CurrencyTable";

  export default {
    name: 'CurrencyPage',
    data: () => ({
      titlePage: 'таблица валют: '
    }),
    created() {
      this.$store.dispatch('fetchCurrency')
    },
    computed: {
      currency() {
        return this.$store.state.currency
      }
    },
    components: { CurrencyTable },
  }
</script>
