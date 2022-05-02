<template>
  <b-card class="mt-4 p-0">
    <div class="output-screen p-2 d-flex flex-column align-items-end">
      <div class="expression">{{ expression }}</div>
      <div>{{ secondOperand || firstOperand || 0 }}</div>
    </div>
    <div class="button-container">
      <b-row no-gutters>
        <b-col>
          <b-button variant="warning" @click="calculatePercentage">%</b-button>
          <b-button variant="warning" @click="clearEntry">CE</b-button>
          <b-button variant="warning" @click="clear">C</b-button>
          <b-button variant="warning" @click="deleteLastDigit">Del</b-button>
        </b-col>
      </b-row>

      <b-row no-gutters>
        <b-col>
          <b-button @click="calculateFraction">1/x</b-button>
          <b-button @click="calculateSquare">x²</b-button>
          <b-button @click="calculateSquareRoot">2/sqrx</b-button>
          <b-button
            :class="{ 'active-operator': operator === '/' }"
            variant="warning"
            @click="updateOperator('/')"
            >/</b-button
          >
        </b-col>
      </b-row>

      <b-row no-gutters>
        <b-col>
          <b-button @click="appendCharacter(7)">7</b-button>
          <b-button @click="appendCharacter(8)">8</b-button>
          <b-button @click="appendCharacter(9)">9</b-button>
          <b-button
            :class="{ 'active-operator': operator === '*' }"
            variant="warning"
            @click="updateOperator('*')"
            >x</b-button
          >
        </b-col>
      </b-row>

      <b-row no-gutters>
        <b-col>
          <b-button @click="appendCharacter(4)">4</b-button>
          <b-button @click="appendCharacter(5)">5</b-button>
          <b-button @click="appendCharacter(6)">6</b-button>
          <b-button
            :class="{ 'active-operator': operator === '-' }"
            variant="warning"
            @click="updateOperator('-')"
            >-</b-button
          >
        </b-col>
      </b-row>

      <b-row no-gutters>
        <b-col>
          <b-button @click="appendCharacter(1)">1</b-button>
          <b-button @click="appendCharacter(2)">2</b-button>
          <b-button @click="appendCharacter(3)">3</b-button>
          <b-button
            :class="{ 'active-operator': operator === '+' }"
            variant="warning"
            @click="updateOperator('+')"
            >+</b-button
          >
        </b-col>
      </b-row>

      <b-row no-gutters>
        <b-col>
          <b-button @click="changeSign">+/-</b-button>
          <b-button @click="appendCharacter(0)">0</b-button>
          <b-button @click="appendCharacter('.')">.</b-button>
          <b-button variant="warning" @click="calculateBasic">=</b-button>
        </b-col>
      </b-row>
    </div>
  </b-card>
</template>

<script>
import { calculateBasic } from "../utils/calculateBasic";
import { calculateFraction } from "../utils/calculateFraction";
import { calculateSquareRoot } from "../utils/calculateSquareRoot";
import { calculateSquare } from "../utils/calculateSquare";
import { calculatePercentage } from "../utils/calculatePercentage";
import { changeSign } from "../utils/changeSign";
import { appendCharacter } from "../utils/appendCharacter";
import { updateOperator } from "../utils/updateOperator";
import { clear } from "../utils/clear";
import { clearEntry } from "../utils/clearEntry";
import { deleteLastDigit } from "../utils/deleteLastDigit";

export default {
  data() {
    return {
      firstOperand: "",
      secondOperand: "",
      operator: "",
      expression: "",
    };
  },
  methods: {
    calculateBasic,
    calculateFraction,
    calculateSquareRoot,
    calculateSquare,
    calculatePercentage,
    changeSign,
    appendCharacter,
    updateOperator,
    clear,
    clearEntry,
    deleteLastDigit,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/styles.scss";
</style>
