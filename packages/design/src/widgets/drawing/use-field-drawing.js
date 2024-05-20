import { computed } from 'vue'
// import { getCopyRow } from '../../util'
import { getNextItem, getCopyRow, cloneDeep } from '@d-render/shared'
import { useConfigProvide } from '@/hooks/use-config-provide'
export const useList = ({ props, emit }) => {
  const list = computed(() => {
    return props.data?.list || []
  })
  const updateList = (value) => {
    emit('updateList', value)
  }
  return { list, updateList }
}

export const useFieldDrawing = ({ list, updateList, emit }) => {
  const drConfig = useConfigProvide()

  const addItem = async ({ newIndex }) => {
    const itemList = list.value
    let newItem = list.value[newIndex]
    if (drConfig.beforeCreate) {
      // 受接口返回的数据控制
      newItem = await drConfig.beforeCreate({ item: newItem, index: newIndex, itemList })
      itemList.splice(newIndex, 1, newItem)
      updateList(itemList)
    }
    emit('select', newItem)
  }
  const selectItem = (element) => {
    emit('select', element)
  }

  const deleteItem = async (index) => {
    const itemList = list.value
    if (drConfig.beforeDelete) {
      await drConfig.beforeDelete({ index, item: itemList[index], itemList })
    }
    const nextItem = getNextItem(list.value, index)
    selectItem(nextItem)
    itemList.splice(index, 1)

    updateList(itemList)
  }
  const copyItem = async (index, rewriteItem) => {
    const itemList = list.value
    const item = Object.assign({}, cloneDeep(itemList[index]), rewriteItem)
    let newItem = getCopyRow(item)
    if (drConfig.beforeCreate) {
      // 受接口返回的数据控制
      newItem = await drConfig.beforeCreate({ item: newItem, index, itemList })
    }
    itemList.splice(index + 1, 0, newItem)
    updateList(itemList, 'copy')
    selectItem(newItem)
  }
  return {
    addItem,
    selectItem,
    deleteItem,
    copyItem
  }
}
