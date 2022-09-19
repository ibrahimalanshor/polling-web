<script setup>
import { OrganismNavbar } from '@/components/organisms';
</script>

<template>
  <div>
    <organism-navbar />
    <div class="max-w-screen-lg mx-auto px-6">
      <slot />
    </div>
  </div>
</template>
