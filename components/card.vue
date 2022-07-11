<template>
  <div class='mb-10'>
    <nuxt-img
      :src="`/img/${imagePath}`"
      width="250px"
      height="150px"
      class="border-dashed border-[1px] mx-auto"
    />
    <div class='text-center w-250'>
      <slot />
    </div>
    <hr :key="index" class="w-full border-gray" />
  </div>
</template>

<script>
export default {
  props: {
    imagePath: { required: false, type: String },
    orientation: { required: true, type: String },
  },
};
</script>

<style scoped></style>
