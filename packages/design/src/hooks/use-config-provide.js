import { inject } from 'vue'
import { DR_DESIGN_PROVIDE_KEY } from '@/constant'
export const useConfigProvide = () => {
  return inject(DR_DESIGN_PROVIDE_KEY, {})
}
