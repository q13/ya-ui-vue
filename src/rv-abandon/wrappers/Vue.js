import {
  isEqual
} from 'lodash';
import React from 'react'
import Vue from 'vue'
import ReactWrapper from './React';
import Button from 'antd/lib/button';

export default class VueContainer extends React.Component {
  constructor (props) {
    super(props);
    /**
     * We have to track the current Vue component so that we can reliably catch updates to the
     * `component` prop.
     */
    this.currentVueComponent = props.component;

  }
  componentWillReceiveProps (nextProps) {
    const { component, ...props } = nextProps;

    if (this.currentVueComponent !== component) {
      this.updateVueComponent(component, props); // 重新设置新的vue component
    } else {
      // Need deep comparison
      let vueData = this.vueInstance.$data;
      Object.keys(props).some((k) => {
        if (!isEqual(props[k], vueData[k])) {
          vueData[k] = props[k]; 
        }
      });
      // 简单暴力直接assign
      // Object.assign(this.vueInstance.$data, props);
    }
  }

  componentWillUnmount () {
    this.vueInstance.$destroy();
    this.vueInstance = null;
    this.currentVueComponent = null;
  }
  /**
   * ref callback
   * @param {HTMLElement} el - element where vue instance at
   */
  refCallback = (el) => {
    this.el = el;
    this.createVueInstance();
  }

  /**
   * 创建vue component
   * @param {HTMLElement} targetElement - element to attact the Vue instance to
   */
  createVueInstance (props) {
    const self = this;
    const { component, ...props_ } = this.props;

    if (!props) {
      props = props_;
    }

    // 使用new关键字创建的component的components不具局部作用域特性，vue（2.5.13），is bug?
    // 改为直接使用Constructor构建children
    this.vueInstance = new Vue({
      el: this.el,
      data: props,
      components: {
        MyButton: Button
      },
      render (createElement) {
        return createElement(
          component,
          {
            props: this.$data
          },
          [createElement(ReactWrapper, {
            props: {
              component: () => <div>{self.children}</div> // 包一层转换来自react组件的children
            }
          })]
        );
      }
    });
  }
  /**
   * 重新生成vue component
   * @param {Vue} component - Vue component
   * @param {Object} props - props
   */
  updateVueComponent (component, props) {
    this.currentVueComponent = component;
    this.vueInstance.$destroy();
    console.log('rerender children');
    // 重新生成vue component
    this.createVueInstance(props);
    /**
     * Replace the component in the Vue instance and update it.
     */
    // console.log(222, component);
    // vueInstance.$options.components[VUE_COMPONENT_NAME] = component;
    // vueInstance.$options.data = props;
    // vueInstance.$forceUpdate();
    // console.log('vueIns', vueInstance.aaaa);
  }

  render () {
    return <div ref={this.refCallback} />
  }
}
