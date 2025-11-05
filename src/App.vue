<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useGoogleAnalytics } from './composables/useGoogleAnalytics'

// Initialize Google Analytics
useGoogleAnalytics()
</script>

<template>
  <div id="app" class="min-h-screen bg-slate-50">
    <RouterView />
  </div>
</template>
