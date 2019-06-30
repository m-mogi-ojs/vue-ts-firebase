<template>
  <div class="signup">
    <input type="text" placeholder="ユーザー名" v-model="userName">
    <input type="password" placeholder="パスワード" v-model="password">
    <button @click="signUp">登録する</button>
    <p>アカウントがある方は
      <router-link to="/signin">こちら</router-link>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import firebase from 'firebase';


@Component
export default class Signup extends Vue {
  private userName: string = '';
  private password: string = '';
  private signUp(): void {
    firebase.auth().createUserWithEmailAndPassword(this.userName, this.password)
      .then( (auth) => {
        alert('ユーザーが作成されました' + auth!.user!.email);
      }).catch( (err) => {
        alert('ユーザー作成に失敗しました。' + err!.message);
      });
  }
}
</script>
