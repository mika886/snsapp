<template>
<div class="split-box right-box">
  <table>
    <tr>
      <th>コメント</th>
    </tr>
    <tr>
      <td>
        <div class="sns-action">
          <p class="ttl">test</p>
          <p><img src="../img/heart.png"></p>
          <p>0</p>
          <p><img src="../img/cross.png"></p>
        </div>
        <p class="share-text">新規投稿</p>
      </td>
    </tr>
    <tr>
      <td class="comment-line">コメント</td>
    </tr>
    <tr>
      <td>
      <p>コメント</p>
      </td>
    </tr>
  </table>
  <input type="text"><br>
  <button class="btn">コメント</button>
</div>
</template>

<script>
export default {
  layout: 'pattern01'
}
</script>

<style scoped>
.comment-line{
  text-align: center;
  border-top:1px solid white ;
  border-bottom:1px solid white ;
}

input{
  background-color: black;
  border:1px solid white;
  width: 80vw;
  height: 40px;
  margin: 20px 0;
  border-radius:5px ;
  outline: none;
}

.btn{
  margin:0 auto;
}


</style>
