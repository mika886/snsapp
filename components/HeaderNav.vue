<template>
  <div>
    <nav>
      <ul>
      <li v-if="!$auth.loggedIn"><NuxtLink to="/register" tag="a">新規登録</NuxtLink></li>
      <li v-if="!$auth.loggedIn"><NuxtLink to="/login" tag="a">ログイン</NuxtLink></li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
a{
  text-decoration: none;
  color: white;
}

nav{
background: black;
color: white;
}

ul{
display: flex;
}

li{
list-style: none;
text-decoration: none;
padding: 10px;
margin: 0 20px;
}
</style>
