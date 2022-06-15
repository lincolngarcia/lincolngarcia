<template>
  <div class='text-center'>
    <h2 class='text-6xl font-extrabold whitespace-nowrap flex justify-center'>
      <span>Welcome to </span>
      <span style='overflow: scroll; width: 275
      ; height: 70px; margin-left: 0.75rem'>
        <div class='lineUp'>
          <p class='pb-4'>Progress</p>
          <p class='pb-4'>Ingenuity</p>
          <p class='pb-4'>Execution</p>
        </div>
      </span>.
    </h2>
    <br />
    <p>Contact <a href='mailto: lincoln.ross.garcia@gmail.com' class='underline'>me</a> for a custom website.</p>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Lincoln Garcia',
    meta: [
      {
        description: "Looking for fast, seamless webistes? I'm the Software Engineer for you."
      }
    ]
  }}
</script>

<style >
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
  27.5% {
     transform: translateY(-32%);
  }
  43% {
    transform: translateY(-66%);
  }
  90% {
    transform: translateY(-66%);
  }
  100% {
    transform: translateY(0%);
  }

}
</style>
