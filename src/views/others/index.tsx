import { Tag } from 'ant-design-vue'
import { defineComponent, reactive } from 'vue'
import { delay, from } from 'rxjs'
import AppTypes from '@/vue-types'
import IButton from '@/components/Button'

import './style.css'

export type IOthersProps = ExtractPropTypesOut<typeof iOthersProps>

const iOthersProps = {
  title: AppTypes.string.isRequired
}
export default defineComponent({
  name: 'Others',
  props: iOthersProps,
  setup: (props) => {
    const state = reactive({
      loading: false
    })

    return () => (
      <div>
        <Tag>{props.title}</Tag>
        <IButton
          type={'primary'}
          size={'mini'}
          loading={state.loading}
          onClick={() => {
            state.loading = true
            from(fetch('./head.json'))
              .pipe(delay(1000))
              .subscribe({
                next: (response) => {
                  from(response.json()).subscribe((val) => {
                    console.log(val)
                  })
                },
                complete: () => {
                  state.loading = false
                }
              })
          }}
        >
          Loading...
        </IButton>

        <div class="abc">
          hh
          <span class="cde">cde</span>
        </div>
      </div>
    )
  }
})
