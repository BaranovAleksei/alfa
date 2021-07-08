<template>
  <div class="rateTable">
    <table>
      <thead>
      <tr>
        <th>id</th>
        <th>Cur_Abbreviation</th>
        <th>Cur_Name</th>
        <th>Cur_OfficialRate</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(el,index) in info"
        :key="el.Cur_ID">
        <td>{{index+1}}</td>
        <td>{{el.Cur_Abbreviation}}</td>
        <td>{{el.Cur_Name}}</td>
        <td>{{el.Cur_OfficialRate}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  name: 'RateTable',
  props: {
    info: {
      type: Array,
      required: true
    }
  }
}
</script>

<style type="text/css">
.rateTable {
  width: 100%;
}
table {
  width: 100%;
  text-align: left;
  border-collapse: collapse;
  background: #252F48;
  border: 1px solid #ffff;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
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
  border-right: 1px solid #37B5A5;
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