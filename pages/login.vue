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
export default {
  data() {
    return {
      email:"",
      password:"",
    };
  },
  methods: {
    async login() {
      try {
        await this.$auth.loginWith("laravelJWT", {
          data: {
            email: this.email,
            password: this.password,
          },
        });
        this.$router.push("/home");
      } catch {
        alert("メールアドレスまたはパスワードが間違っております");
      }
    },
  },
};
</script>
