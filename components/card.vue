<template>
  <div>
    <h1 class='h3 text-center'>{{cardTitle}}</h1>
    <div class='md:flex md:gap-5 mb-10' :class='orientation ? "flex text-right" : "flex-row-reverse text-left"'>
      <nuxt-img
        src="/img/front-page/valley.png"
        width="250px"
        height="150px"
        class="border-dashed border-[1px] mx-auto"
      />
      <div class="w-250">
        <slot />
      </div>
    </div>
      <hr class="w-full border-gray" />
  </div>
</template>

<script>
export default {
  props: {
    imagePath: { required: false, type: String },
    orientation: { required: true, type: Boolean },
    cardTitle: {required: false}
  },
};
</script>

<style scoped></style>
