import { isJson } from '@d-render/shared'
export default {
  inheritAttrs: false,
  props: {
    schema: {}
  },
  emits: ['update:schema'],
  setup (props, { emit }) {
    return () => <div>
      {JSON.stringify(props.schema, null, 2)}
    </div>
  }
}
