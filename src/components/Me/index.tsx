/*
 * @Author: Rico
 * @Date: 2021-07-31 19:04:07
 * @LastEditors: Rico
 * @LastEditTime: 2021-07-31 23:39:10
 * @Description:
 */
/*
 * @Author: Rico
 * @Date: 2021-07-31 11:32:44
 * @LastEditors: Rico
 * @LastEditTime: 2021-07-31 19:01:39
 * @Description:
 */
import { defineComponent } from 'vue'
import logo from '@/assets/logo.png'
export interface MeProps {
  title: string
}

export default defineComponent({
  name: 'Me',
  props: {
    title: {
      type: String,
      required: true
    }
  },

  setup: (props: MeProps, { emit, slots, attrs }) => {
    console.log({ props, emit, slots, attrs })

    console.log(props.title)
    return () => (
      <div>
        <h4>{props.title}</h4>
        <h5>{slots.title && slots.title()}</h5>
        <img
          alt="Vue logo"
          src={logo}
          onClick={() => {
            emit('tap', 1)
          }}
        />
      </div>
    )
  }
})
