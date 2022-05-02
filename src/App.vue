<template>
  <div id="app">
    <b-container>
      <b-row>
        <b-col sm="6" offset-sm="3">
          <CalculatorComponent />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import CalculatorComponent from "./components/CalculatorComponent.vue";

export default {
  name: "App",
  components: {
    CalculatorComponent,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
