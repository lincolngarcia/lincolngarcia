<template>
  <div
    style="width: 1200px; height: 300px"
    class="flex items-center justify-between"
    :class='orientation=="right" ? "flex-row" :"flex-row-reverse"'
  >
    <div class="w-37.5 h-20 m-4">
      <img
        :src="image"
        alt="image"
        class="h-full w-full"
        style="border: 1px red dashed"
      />
    </div>
    <div class='w-1/2 h-full p-5 text-left'>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: { required: false, type: Image },
    orientation: { required: true, type: String },
  },
};
</script>

<style scoped></style>
