<template>
<div class="split-box right-box">
  <table>
    <tr>
      <th>ホーム</th>
    </tr>
    <tr v-for="item in shareLists" :key="item.id">
      <td>
        <div class="sns-action">
          <p class="ttl">{{item.id}}</p>
          <p@click="counter()"><img src="../img/heart.png"></p>
          <p>{{count}}</p>
          <p@click="deleteShare(item.id)"><img src="../img/cross.png"></p>
          <nuxt-link to="/comment"><img src="../img/detail.png"></nuxt-link>
        </div>
        <p class="share-text">{{item.share}}</p>
      </td>
    </tr>
  </table>
</div>
</template>

<script>
export default {
  layout: 'pattern01',

  data(){
    return{
    shareLists:[],
    count:0
    }
  },

  created: async function getShare(){
    const resData = await this.$axios.get("http://127.0.0.1:8000/api/share/");
    this.shareLists = resData.data.data;
  },

  methods: {
    async deleteShare(id) {
    await this.$axios.delete("http://127.0.0.1:8000/api/share/" + id);
    this.$router.go({path: '/home', force: true})
    },

    counter:function(){
      this.count++;
    }
  }

  }

</script>

<style>

table{
  border: 1px  solid white;
  border-radius:5px ;
  width: 80vw;
}

th{
  text-align: left;
  padding: 10px;
}

td{
  border-top:1px solid white ;
}

.sns-action{
  display: flex;
  justify-content: flex-start;
  margin: 10px;
}

img{
  width: 30px;
  margin: 0 20px;
  cursor: pointer;
}

.ttl{
  font-weight: bold;
}

.share-text{
  padding: 10px;
}

</style>
