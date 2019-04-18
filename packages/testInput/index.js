import ElTestInput from './src/testInput';

/* istanbul ignore next */
ElTestInput.install = function(Vue) {
  Vue.component(ElTestInput.name, ElTestInput);
};

export default ElTestInput;
