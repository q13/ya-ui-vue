/**
 * Transform react component to vue component
 */
// import {
//   isEqual
// } from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';

import Vue from 'vue';

var store = new Map(); // 存储转换过的组件类，不重复生成

/**
 * Transform vue children to react component
 */
class C extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  renderVueComponent() {
    const props = this.props;
    const slot = props.slot;
    let vueComponent = this.vueComponent;
    if (!vueComponent) {
      const el = this.v;
      const {
        innerTag = 'div',
        innerClass = ''
      } = getNormalizeProps(props);
      vueComponent = new Vue({
        el,
        data: {
          slot
        },
        render(h) {
          return h(innerTag, {
            class: getNormalizeClass(innerClass)
          }, this.slot);
        }
      });
      this.vueComponent = vueComponent;
    } else {
      vueComponent.slot = slot;
    }
  }
  componentDidMount() {
    this.renderVueComponent();
  }
  // componentWillReceiveProps() {
  // }
  // shouldComponentUpdate() {
  //   return true;
  // }
  componentDidUpdate() {
    this.renderVueComponent();
  }
  componentWillUnmount() {
    if (this.vueComponent) {
      this.vueComponent.$destroy();
      this.vueComponent = null;
    }
  }
  render() {
    const props = this.props;
    const {
      innerTag = 'div',
      innerClass = ''
    } = getNormalizeProps(props);
    return React.createElement(innerTag, {
      ref: (el) => {
        this.v = el;
      },
      className: getNormalizeClass(innerClass, 'react')
    }, null);
  }
}
/**
 * 返回转换函数
 */
export default function (R) {
  var V = store.get(R);
  if (!V) {
    V = Vue.extend({
      inheritAttrs: false, // class/style except
      methods: {
        renderReactComponent() {
          const attrs = this.$attrs;
          const slot = this.$slots.default;
          const listeners = this.$listeners;
          // let reactRenderedDom = this.reactRenderedDom; // 兼容preact
          const {
            outerTag,
            innerTag,
            outerClass,
            innerClass,
            reactRef,
            ...restAttrs
          } = getNormalizeProps(attrs);
          // 组装成react props
          var reactProps = {
            ...restAttrs,
            ref: reactRef // 重命名react component ref
          };
          Object.keys(listeners).forEach((eventName) => {
            reactProps['on' + capitalize(eventName)] = listeners[eventName];
          });
          let c = null;
          // let e = null;
          if (slot) {
            c = React.createElement(C, {
              slot,
              innerTag,
              innerClass
            }, null);
          }
          const r = React.createElement(R, reactProps, c);
          this.$r = r; // 保存react引用
          return ReactDOM.render(r, this.$refs.r);
        }
      },
      mounted() {
        this.renderReactComponent();
      },
      updated() {
        this.renderReactComponent();
      },
      beforeDestroy() {
        this.$r = null; // 释放$r引用
        ReactDOM.unmountComponentAtNode(this.$refs.r);
      },
      render(h) {
        const {
          outerTag = 'div',
          outerClass = ''
        } = getNormalizeProps(this.$attrs);
        return h(outerTag, {
          ref: 'r',
          class: getNormalizeClass(outerClass)
        });
      }
    });
  }
  return V;
};

/**
 * 首字母大写
 * @param {String} str - string
 */
function capitalize(str) {
  const [first, ...rest] = str;
  return first.toUpperCase() + rest.join('');
}
/**
 * 标准化class
 * @param {Mix} value - 混合类型，可能是string/object/array
 * @param {String} type - vue/react
 */
function getNormalizeClass(value, type = 'vue') {
  var result = {};
  if (typeof value === 'string') {
    value = value.split(/\s+/).filter((v) => {
      return !!v;
    });
    if (value.length) {
      value.forEach((className) => {
        result[className] = true;
      });
    }
  } else if (Array.isArray(value)) {
    value.forEach((className) => {
      result[className] = true;
    });
  } else {
    result = value;
  }
  if (type === 'react') {
    result = Object.keys(result).filter((className) => {
      return result[className];
    }).join(' ');
  }
  return result;
}

/**
 * 标准化属性
 * @param {Object} props - 待格式化属性
 */
function getNormalizeProps(props) {
  const extraKeys = new Map([
    ['outer-tag', 'outerTag'],
    ['outer-class', 'outerClass'],
    ['inner-tag', 'innerTag'],
    ['inner-class', 'innerClass']
  ]);
  return Object.keys(props).reduce((pv, cv) => {
    if (extraKeys.has(cv)) {
      return {
        ...pv,
        [extraKeys.get(cv)]: props[cv]
      };
    } else {
      return {
        ...pv,
        [cv]: props[cv]
      };
    }
  }, {});
}
