import {
  isEqualWith,
  isEqual
} from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import VueWrapper from './Vue';
import Button from 'antd/lib/button';

const makeReactContainer = Component => {
  return class ReactInVue extends React.Component {
    static displayName = `ReactInVue${Component.displayName || Component.name || 'Component'}`

    constructor (props) {
      super(props);

      /**
       * We create a stateful component in order to attach a ref on it. We will use that ref to
       * update component's state, which seems better than re-rendering the whole thing with
       * ReactDOM.
       */
      this.state = props;
    }

    wrapVueChildren (children, type) {
      if (children) {
        return {
          components: {
            MyButton: Button
          },
          render: (createElement) => {
            return createElement('div', children);
          }
        }
      } else {
        return null;
      }
    }
    shouldComponentUpdate(nextProps, nextState) {
      // console.log('react-diff-new', nextProps);
      // console.log('react-diff-old', this.props);
      // console.log('react-diff==', this.props === nextProps);
      // return this.props !== nextProps;
      // return true;
      // if (nextProps.m === '3') {
      //   console.log('modal', JSON.stringify(nextState));
      //   console.log('modal', JSON.stringify(this.state));
      //   console.log(nextState.children[0] === this.state.children[0]);
      // }
      // children element引用判定
      const props = this.props;
      const state = this.state;
      const needUpdate = !isEqual(nextProps, props) || !isEqual(nextState, state);
      // return true;
      console.log('needUpdate', needUpdate);
      return needUpdate;
      // let i = 0;
      // let nextPropsKeys = Object.keys(nextProps);
      // let nextStateKeys = Object.keys(nextState);
      // let result = false; // 默认不更新
      // // 先比对props
      // for (i = 0; i < nextPropsKeys.length; i++) {
      //   if (nextPropsKeys[i] === 'children') {
      //     result = nextProps['children'].some((item) => {
      //       return props['children'].some((item2) => {
      //         return item2 !== item;
      //       });
      //     });
      //     if (result) {
      //       if (nextProps.t === 'btn') {
      //         console.log('prop children here');
      //       }
      //       return true;
      //     }
      //   } else {
      //     result = !isEqual(nextProps[nextPropsKeys[i]], props[nextPropsKeys[i]]);
      //     if (result) {
      //       if (nextProps.t === 'btn') {
      //         console.log('prop here');
      //       }
      //       return true;
      //     }
      //   }
      // }
      // // 再比对state
      // for (i = 0; i < nextStateKeys.length; i++) {
      //   if (nextStateKeys[i] === 'children') {
      //     result = nextState['children'].some((item) => {
      //       return state['children'].some((item2) => {
      //         return item2 !== item;
      //       });
      //     });
      //     if (result) {
      //       if (nextProps.t === 'btn') {
      //         console.log('state children here');
      //         console.log('stat1', JSON.stringify(nextState['children']));
      //         console.log('state2', JSON.stringify(state['children']));
      //         console.log('=====', nextState['children'] === state['children']);
      //       }
      //       return true;
      //     }
      //   } else {
      //     result = !isEqual(nextState[nextStateKeys[i]], state[nextStateKeys[i]]);
      //     if (result) {
      //       if (nextProps.t === 'btn') {
      //         console.log('state here');
      //       }
      //       return true;
      //     }
      //   }
      // }
      // return false;
    }
    render () {
      const {
        children,
        // Vue attaches an event handler, but it is missing an event name, so
        // it ends up using an empty string. Prevent passing an empty string
        // named prop to React.
        '': _invoker,
        ...rest
      } = this.state;
      console.log('attrs', rest);
      const wrappedChildren = this.wrapVueChildren(children); // 这是个vue组件
      return (
        <Component {...rest}>
          {children && <VueWrapper component={wrappedChildren} />}
        </Component>
      )
    }
  }
}
export default {
  props: ['component', 'passedProps'],
  render (createElement) {
    return createElement('div', { ref: 'react' })
  },
  methods: {
    mountReactComponent (component) {
      const Component = makeReactContainer(component);
      // Test
      // const test = React.createElement(VueWrapper, {
      //   component: { template: '<div></div>' }
      // }, null);
      // console.log('test-children', test);
      // console.log('----------------------------------');

      const children = this.$slots.default !== undefined ? { children: this.$slots.default } : {}
      ReactDOM.render(
        <Component
          {...this.$props.passedProps}
          {...this.$attrs}
          {...this.$listeners}
          {...children}
          ref={ref => (this.reactComponentRef = ref)}
        />,
        this.$refs.react
      )
    }
  },
  mounted () {
    this.mountReactComponent(this.$props.component);
  },
  beforeDestroy () {
    ReactDOM.unmountComponentAtNode(this.$refs.react);
  },
  updated () {
    /**
     * AFAIK, this is the only way to update children. It doesn't seem to be possible to watch
     * `$slots` or `$children`.
     */
    if (this.$slots.default !== undefined) {
      this.reactComponentRef.setState({ children: this.$slots.default });
    } else {
      this.reactComponentRef.setState({ children: null });
    }
  },
  inheritAttrs: false,
  watch: {
    $attrs: {
      handler (nv, ov) {
        this.reactComponentRef.setState({ ...this.$attrs });
      },
      deep: true
    },
    '$props.component': {
      handler (newValue) {
        console.log('components');
        this.mountReactComponent(newValue)
      },
    },
    $listeners: {
      handler () {
        console.log('listeners');
        this.reactComponentRef.setState({ ...this.$listeners })
      },
      deep: true,
    },
    '$props.passedProps': {
      handler () {
        console.log('passedProps');
        this.reactComponentRef.setState({ ...this.$props.passedProps })
      },
      deep: true,
    },
  },
}
