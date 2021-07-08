<template>
  <div>
    <div class="searchDate">
      <h4>{{titlePage}}</h4>
      <input type="date" v-model = "form.date" v-on:change="fetchRate(form.date)">
    </div>
    <RateTable :info="info" />
  </div>
</template>

<script>
  import RateTable from "../components/RateTable";
  import {rates} from "../api/routes";
  import axiosInstance from '@/api/index'

  export default {
    name: 'TimeChangePage',
    data: () => ({
      titlePage: 'укажите период: ',
      info: [],
      form: {
        date: 'new Date()'.replace(/\b0/g, '')
      }
    }),
    methods: {
      fetchRate(strTime) {
        return axiosInstance.get(rates(strTime))
            .then( res => {
              this.info = res.data
            })
            .catch( err => {
              console.log(err)
            })
      }
    },
    mounted() {
      this.fetchRate(this.form.date)
    },
    components: { RateTable }
  }
</script>

<style type="text/css">
  .searchDate {
    display: flex;
    width: 100%;
    margin: 10px 0;
  }
  .searchDate > h4 {
    line-height: 0.8em;
    padding: 0  15px;
  }
  .searchDate > input {
    align-content: center;
  }
</style>