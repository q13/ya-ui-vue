import { ReactWrapper } from '../'

export default function VueResolver (component) {
  return {
    components: { ReactWrapper },
    props: ['passedProps'],
    inheritAttrs: false,
    watch: {
      $attrs: {
        handler (nv, ov) {
          // console.log('watch', this.$attrs);
          // console.log('nv', nv);
          // console.log('ov', ov);
          // console.log('==2', ov === nv);
        },
        deep: true
      }
    },
    render (createElement) {
      return createElement(
        'react-wrapper',
        {
          props: {
            component,
            passedProps: this.$props.passedProps,
          },
          attrs: this.$attrs,
          on: this.$listeners,
        },
        this.$slots.default
      )
    },
  }
}
