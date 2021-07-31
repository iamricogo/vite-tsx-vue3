/*
 * @Author: Rico
 * @Date: 2021-07-31 11:32:44
 * @LastEditors: Rico
 * @LastEditTime: 2021-08-01 00:11:43
 * @Description:
 */
import { defineComponent, ref, shallowRef } from 'vue'
import Me, { MeProps } from '@/components/Me'
import Others, { OthersProps } from '@/components/Others'
interface JsxData extends MeProps, OthersProps {
  onTap?: any
}
interface ChildJsxData {
  others?: JsxData
  slots?: any
}

export default defineComponent({
  name: 'App',
  setup: () => {
    const coms = {
      Me,
      Others
    }
    const active: any = shallowRef(Me)

    const jsxDataMap = ref(new WeakMap<any, ChildJsxData>()).value

    jsxDataMap
      .set(Me, {
        others: {
          title: 'Me',
          onTap: (data: any) => {
            jsxDataMap.get(Me)!.others!.title = String(data)
          }
        },

        slots: {
          title: () => <span>我是作用域插槽</span>
        }
      })
      .set(Others, {
        others: {
          title: 'Others'
        }
      })

    return () => (
      <div>
        <active.value
          v-slots={jsxDataMap.get(active.value)?.slots}
          {...jsxDataMap.get(active.value)?.others}
        />
        <ul>
          {Object.entries(coms).map(([key, value]) => (
            <li
              onClick={() => {
                active.value = value
              }}
            >
              {key}
            </li>
          ))}
        </ul>
      </div>
    )
  }
})
