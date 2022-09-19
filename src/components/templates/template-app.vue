<script setup>
import { OrganismNavbar } from '@/components/organisms';
</script>

<template>
  <div>
    <organism-navbar />
    <div class="max-w-screen-lg mx-auto">
      <slot />
    </div>
  </div>
</template>
