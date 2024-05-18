import { defineComponent, provide } from 'vue'
import { DR_DESIGN_PROVIDE_KEY } from '@/constant'
export default defineComponent({
  name: 'DesignConfigProvide',
  props: {
    moveIcon: Object,
    RightHandle: Object,
    beforeDelete: Function,
    beforeCreate: Function,
    beforeUpdate: Function
  },
  setup (props, { slots }) {
    provide(DR_DESIGN_PROVIDE_KEY, props)
    return () => slots.default?.()
  }
})
