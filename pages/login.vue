<template>
<validation-observer ref="obs" v-slot="ObserverProps">
  <body>
    <div class="container">
      <p>ログイン</p>
      <form @submit.prevent="login" class="form">
        <validation-provider v-slot="{ errors }" rules="required">
        <input type="email" v-model="email" placeholder="メールアドレス" name="メールアドレス">
        <div class="error" style="color:red;">{{ errors[0] }}</div>
        </validation-provider>
        <validation-provider v-slot="{ errors }" rules="required">
        <input type="password" v-model="password" placeholder="パスワード" name="パスワード">
        <div class="error" style="color:red;">{{ errors[0] }}</div>
        </validation-provider>
        <button type="submit" class='btn' :disabled="ObserverProps.invalid || !ObserverProps.validated">ログイン</button>
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
      email: null,
      password: null,
    }
  },
  methods: {
    login() {
      if (!this.email || !this.password) {
        alert('メールアドレスまたはパスワードが入力されていません。')
        return
      }
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.push('/home')
        })
        .catch((error) => {
          switch (error.code) {
            case 'auth/invalid-email':
              alert('メールアドレスの形式が違います。')
              break
            case 'auth/user-disabled':
              alert('ユーザーが無効になっています。')
              break
            case 'auth/user-not-found':
              alert('ユーザーが存在しません。')
              break
            case 'auth/wrong-password':
              alert('パスワードが間違っております。')
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

