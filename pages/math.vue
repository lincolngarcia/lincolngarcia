<template>
  <div class="h-screen m-auto flex flex-col items-center md:justify-center">
    <div class="my-15 md:absolute md:left-50 md:top-50">
      <button class="button" @click="Daily">Daily</button> <br />
      <button @click="queueUp(1, 1)" class="button">Random 1 x 1</button><br />
      <button @click="queueUp(1, 2)" class="button">Random 1 x 2</button><br />
      <button @click="queueUp(1, 3)" class="button">Random 1 x 3</button><br />
      <button @click="queueUp(2, 2)" class="button">Random 2 x 2</button><br />
      <button @click="queueUp(2, 3)" class="button">Random 2 x 3</button><br />
      <button @click="queueUp(3, 3)" class="button">Random 3 x 3</button>
    </div>

    <div class="text-right">
      <input v-model="top" readonly /> <br />
      <span
        class="p1 pr-5"
        v-show="typeof this.top === 'number' && typeof this.bottom === 'number'"
        >x</span
      ><input v-model="bottom" readonly /><br />
      <hr
        v-show="typeof this.top === 'number' && typeof this.bottom === 'number'"
      />
      <input
        v-show="typeof this.top === 'number' && typeof this.bottom === 'number'"
        v-model="input"
        type="number"
        class="mt-2 p-2"
        style="border: 1px solid #b41919"
        @change="this.check"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      queue: [],
      top: null,
      bottom: null,
      input: null,
    };
  },
  methods: {
    Daily() {
      this.queue = [
        [1, 2],
        [1, 2],
        [2, 2],
        [2, 2],
        [2, 3],
        [3, 3],
      ];
      this.display();
    },
    queueUp(x, y) {
      this.queue = [[x, y]];
      this.display();
    },
    display() {
      let array = this.queue[0]
      //the function of this is to create random values
      switch (array[0]) {
        case 1:
          this.bottom = this.randBetween(0, 9);
          break;
        case 2:
          this.bottom = this.randBetween(10, 99);
          break;
        case 3:
          this.bottom = this.randBetween(100, 999);
          break;
        default:
          alert("wtf did you do");
          break;
      }
      switch (array[1]) {
        case 1:
          this.top = this.randBetween(0, 9);
          break;
        case 2:
          this.top = this.randBetween(10, 99);
          break;
        case 3:
          this.top = this.randBetween(100, 999);
          break;
        default:
          alert("wtf did you do");
          break;
      }
    },
    check() {
      if (this.input == this.top * this.bottom) {
        alert(`Correct! ${this.top} X ${this.bottom} = ${this.input}`);
        this.top = null;
        this.bottom = null;
        this.input = null;
        this.queue.shift();
        this.display();
      }
    },
    randBetween(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
  },
};
</script>

<style scoped>
@import "~/css/sovereign.css";
input {
  background-color: black;
  outline: none;
  color: white;
  @apply p1;
}
.button {
  @apply p1 border w-200 mb-5;
  @screen md {
  }
}
</style>
