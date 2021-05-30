import { computed, onMounted, onUnmounted, ref } from 'vue'
import { ComputedRef } from '@vue/reactivity'

export default function (): { width: ComputedRef<number>, type: ComputedRef<'xs' | 'sm' | 'md' | 'lg' | undefined> } {
  const windowWidth = ref(window.innerWidth)

  // eslint-disable-next-line no-return-assign
  const onWidthChange = () => windowWidth.value = window.innerWidth
  onMounted(() => window.addEventListener('resize', onWidthChange))
  onUnmounted(() => window.removeEventListener('resize', onWidthChange))

  // eslint-disable-next-line vue/return-in-computed-property
  const type = computed(() => {
    if (windowWidth.value < 600) return 'xs'
    if (windowWidth.value > 600 && windowWidth.value < 960) return 'sm'
    if (windowWidth.value > 960 && windowWidth.value < 1264) return 'md'
    if (windowWidth.value > 1264) return 'lg'
  })

  const width = computed(() => windowWidth.value)

  return {
    width,
    type
  }
}
