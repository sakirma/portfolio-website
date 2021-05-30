<template>
  <Sidebar :modal="false" :visible="isVisible" :dismissable="false"  :showCloseIcon="false" autoZIndex="1000">
    Wow
  </Sidebar>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useBreakpoints from '@/helpers/userBreakpoints.ts'
import Sidebar from 'primevue/sidebar'

export default defineComponent({
  name: 'AppSidebar',
  components: { Sidebar },
  setup () {
    const { width, type } = useBreakpoints()

    return {
      width,
      type
    }
  },
  computed: {
    isVisible () : boolean {
      return this.type !== 'xs' && this.type !== 'sm'
    }
  }
})
</script>

<style>

</style>
