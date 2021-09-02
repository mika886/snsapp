<template>
    <div class="split-box left-box">
      <img src="../img/logo.png">
      <NuxtLink to="/home" tag="a" class="home-link">ホーム</NuxtLink><br>
      <a @click="logout" class="logout-link">ログアウト</a><br>
      <div class="share-group">
        <label for="share">シェア</label>
        <div class="share-text">
          <textarea name="share" id="share" v-model="newShare" cols="30" rows="10"></textarea>
        </div>
       </div>
       <button class="btn" @click="insertShare">シェアする</button>

    </div>
</template>

<script>
import firebase from '~/plugins/firebase'
export default {
  data(){
    return{
      newShare:"",
      shareLists:[],
    };
  },

  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          alert('ログアウトが完了しました')
          this.$router.replace('/login')
        })
    },
    async getShare(){
      const resData = await this.$axios.get("http://127.0.0.1:8000/api/share/");
      this.shareLists = resData.data.data;
    },

    async insertShare(){
      const sendData={
        share:this.newShare,
      };
      await this.$axios.post("http://127.0.0.1:8000/api/share/", sendData);
      this.getShare();
    },
    async deleteShare(id) {
      await this.$axios.delete("http://127.0.0.1:8000/api/share/" + id);
      this.getShare();
      },
    },
    created() {
      this.getShare();
    },
};
</script>


<style>
*{
  color: white;
  text-decoration: none;
}

body{
  background-color:black;
}

.split-box > img{
  width: 15%;
  margin: 10px;
}

.split-box{
	position:absolute;
	width:80%;
	height:100%;
}

.left-box {
	left:0;
}

.right-box {
	right:0;
	overflow-y:scroll;
}

.logout-link{
  cursor: pointer;
}

.home-link::before{
  content: "";
  background: url(../img/home.png);
  background-size: cover;
  vertical-align: middle;
  width: 30px;
  height: 30px;
  display: inline-block;
  margin:10px
}

.logout-link::before{
  content: "";
  background: url(../img/logout.png);
  background-size: cover;
  vertical-align: middle;
  width: 30px;
  height: 30px;
  display: inline-block;
  margin:10px
}

#share{
  resize: none;
  background-color: black;
  border:1px solid white;
  width: 250px;
  height: 200px;
  outline: none;
  border-radius:5px;
}

.btn{
  border: 0;
  padding: 10px 40px;
  margin: 10px 90px;
  border-radius: 30px;
  background: purple;
  color: white;
  cursor: pointer;
}

</style>
