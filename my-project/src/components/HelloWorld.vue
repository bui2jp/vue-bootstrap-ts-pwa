<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      2019 夏 AWSソリューションアーキテクトの試験勉強について
      <a href="https://aws.amazon.com/jp/certification/certified-solutions-architect-associate/" 
        target="_blank" rel="noopener">official home page</a>.
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
