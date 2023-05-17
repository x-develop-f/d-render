var main = {
  autocomplete: (mode) => () => import(`./autocomplete${mode}`),
  cascader: (mode) => () => import(`./cascader${mode}`),
  checkbox: (mode) => () => import(`./checkbox${mode}`),
  checkboxSingle: (mode) => () => import(`./checkbox-single${mode}`),
  date: (mode) => () => import(`./date${mode}`),
  color: (mode) => () => import(`./color${mode}`),
  input: (mode) => () => import(`./input${mode}`),
  number: (mode) => () => import(`./number${mode}`),
  radio: (mode) => () => import(`./radio${mode}`),
  rate: (mode) => () => import(`./rate${mode}`),
  select: (mode) => () => import(`./select${mode}`),
  slider: (mode) => () => import(`./slider${mode}`),
  switch: (mode) => () => import(`./switch${mode}`),
  time: (mode) => () => import(`./time${mode}`),
  timeSelect: (mode) => () => import(`./time-select${mode}`),
  transfer: (mode) => () => import(`./transfer${mode}`),
  tree: (mode) => () => import(`./tree${mode}`),
  treeSelect: (mode) => () => import(`./tree-select${mode}`),
  default: () => () => import('./input/index')
};

export { main as default };
