<template>
  <validation-observer ref="obs" v-slot="ObserverProps">
    <body>
      <div class="container">
        <p>新規登録</p>
        <form @submit.prevent="register" class="form">
          <validation-provider v-slot="{ errors }" rules="required|max:20">
            <input type="text" v-model="name" placeholder="ユーザーネーム" name="ユーザーネーム" />
            <div class="error" style="color:red;">{{ errors[0] }}</div>
          </validation-provider>

          <validation-provider v-slot="{ errors }" rules="required|email">
          <input type="email" v-model="email" placeholder="メールアドレス" name="メールアドレス" />
          <div class="error" style="color:red;">{{ errors[0] }}</div>
           </validation-provider>

           <validation-provider v-slot="{ errors }" rules="required|min:6">
          <input type="password" v-model="password" placeholder="パスワード" name="パスワード"/>
          <div class="error" style="color:red;">{{ errors[0] }}</div>
           </validation-provider>

          <button type="submit" class='btn' :disabled="ObserverProps.invalid || !ObserverProps.validated">新規登録</button>
        </form>
      </div>
    </body>
  </validation-observer>
</template>

<script>
import firebase from '~/plugins/firebase'
export default {
  data() {
    return {
      name: null,
      email: null,
      password: null,
    }
  },
  methods: {
    register() {
      if (!this.name || !this.email || !this.password) {
        alert('ユーザーネーム、メールアドレスまたはパスワードが入力されていません。')
        return
      }
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.name,this.email, this.password)
        .then((data) => {
          data.user.sendEmailVerification().then(() => {
            this.$router.replace('/login')
          })
        })
        .catch((error) => {
          switch (error.code) {
            case 'auth/invalid-email':
              alert('メールアドレスの形式が違います。')
              break
            case 'auth/email-already-in-use':
              alert('このメールアドレスはすでに使われています。')
              break
            case 'auth/weak-password':
              alert('パスワードは6文字以上で入力してください。')
              break
            default:
              alert('エラーが起きました。しばらくしてから再度お試しください。')
              break
          }
        })
    },
  },
}
</script>

<style>
body{
  background-color: black;
}

p{
  font-weight: bold;
  padding: 20px;
}

.container{
  text-align: center;
  background-color:white ;
  width: 30%;
  margin: 100px auto;
  border-radius: 5px;
}

.form{
  padding: 10px;
}

input{
  margin: 10px;
  width: 300px ;
  height: 40px;
  border-radius: 5px;
}
input:focus{
  outline: 0;
}

.btn{
  border: 0;
  padding: 10px 40px;
  margin: 10px;
  border-radius: 30px;
  background: purple;
  color: white;
  cursor: pointer;
}


</style>
