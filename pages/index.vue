<template>
  <div class="flex flex-col items-center">
    <head-hook />
    <br />
    <p class="p2 text-center">
      Contact
      <a href="mailto: lincolngarcia.dev@gmail.com" class="underline">me</a>
      for a custom website, specialized just for you.
    </p>
    <br />
    <br />
    <br />
    <br />
    <div>
      <card
        v-for="(card, index, iteration) in cards"
        :imagePath="card.image"
        :orientation="iteration % 2 == 0 ? 'right' : 'left'"
        :key="card.title"
      >
        {{ card.text }}
      </card>
    </div>
  </div>
</template>

<script>
import head_hook from "../components/head_hook.vue";
import cards from "../data/cards.json";

export default {
  components: { head_hook },
  head: {
    title: "Lincoln Garcia",
    meta: [
      {
        description:
          "Looking for fast, seamless webistes? I'm the Software Engineer for you.",
      },
    ],
  },
  data() {
    return {
      cards,
    };
  },
};
</script>

<style>
html {
  animation-name: redFont;
  animation-duration: 3s;
  animation-delay: 6s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}

@keyframes redFont {
  0% {
    color: rgb(233, 233, 233);
  }
  100% {
    color: #b41919;
  }
}

.lineUp {
  animation: 8s anim-lineUp ease-out 1;
  animation-fill-mode: forwards;
}
@keyframes anim-lineUp {
  0% {
    transform: translateY(0%);
  }
  10% {
    transform: translateY(0%);
  }
  30% {
    transform: translateY(-32%);
  }
  40% {
    transform: translateY(-32%);
  }
  60% {
    transform: translateY(-66%);
  }
  70% {
    transform: translateY(-66%);
  }
  100% {
    transform: translateY(-66%);
  }
}
</style>
