<template>
  <div class="currencyTable">
    {{currencys}}
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Cur_Code</th>
          <th>Cur_Abbreviation</th>
          <th>Cur_Name</th>
          <th>Cur_Name_Eng</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="currency in currencys"
            :key = "currency.Cur_ID"
          >
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'CurrencyTable',
    created() {
      this.$store.dispatch('fetchCurrency')
    },

    computed: {
      currencys() {
        return this.$store.state.currency
      }

    }
  }
</script>

<style type="text/css">
  .currencyTable {
    width: 100%;
  }
  table {
    width: 100%;
    text-align: left;
    border-collapse: collapse;
    background: #252F48;
  }
  table th {
    width: 20%;
    color: #EDB749;
    border-bottom: 1px solid #37B5A5;
    padding: 12px 17px;
  }
  table td {
    color: #CAD4D6;
    border-bottom: 1px solid #37B5A5;
    border-right:1px solid #37B5A5;
    padding: 7px 17px;
  }
  .table tr:last-child td {
    border-bottom: none;
  }
  .table td:last-child {
    border-right: none;
  }
  .table tr:hover td {
    text-decoration: underline;
  }
</style>