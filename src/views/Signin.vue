<template>
  <div class="signin">
    <input type="text" placeholder="ユーザー名" v-model="userName">
    <input type="password" placeholder="パスワード" v-model="password">
    <button @click="signIn">登録する</button>
    <p>アカウントがない方は
      <router-link to="/signup">こちら</router-link>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import firebase from 'firebase';

@Component
export default class Signin extends Vue {
  private userName: string = '';
  private password: string = '';
  private signIn(): void {
    window.alert('clicked and called to signIn ' + this.userName + this.password);
    firebase.auth().signInWithEmailAndPassword(this.userName, this.password)
      .then( (auth) => {
        alert('ログインできました。' + auth!.user!.email);
        this.$router.push('/');
      }).catch( (err) => {
        alert('ログインに失敗しました。' + err!.message);
      });
  }
}
</script>
