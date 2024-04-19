<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<template>
  <section class="col-12">
    <h2>{{ title }}</h2>
    <slot></slot>
  </section>
</template>
