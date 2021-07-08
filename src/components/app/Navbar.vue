<template>
  <ul class = 'navbar'>
    <router-link
      v-for="link in links"
      :key="link.url"
      tag='li'
      active-class='active'
      :to = 'link.url'
      :exact = 'link.exact'
    >
      <a href="#">{{ link.title }}</a>
    </router-link>
  </ul>
</template>

<script>
  export default {
    data: () => ({
      links: [
        { title: 'home', url: '/', exact: true },
        { title: 'second', url: '/second' }
      ]
    })
  }
</script>

<style type="text/css">
  ul.navbar{
    width: 960px;
    display: flex;
    padding: 0 0 0 20px;
    justify-content: start;
    background: #252F48;
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    border-radius: 5px;
    border: 1px solid #ffff;
  }
  li {
    list-style-type: none;
    padding: 10px;
  }
  li a {
    text-decoration: none;
    font-size: 1.2em;
    color: #ffff;
  }
  .active {
    background: #37B5A5;
    color: #EDB749;
  }

</style>