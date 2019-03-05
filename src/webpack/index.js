/**
 * @author Yoichiro Hirano
 * @description Develop Environment Model
 * @created 2018/12/03
 * @link https://
 */

import Vivus from 'vivus';
// import CONSTANT from './helper/CONSTANT';
// import { getIndexValueOfGivenPercentage } from './helper/util';

export default class Index {
  /**
   * constructor
   */
  constructor() {
    this.mask = new Vivus('my-svg', { duration: 200 });
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.DEV_ENV_MODEL = window.DEV_ENV_MODEL || {};
  window.DEV_ENV_MODEL.INDEX = window.DEV_ENV_MODEL.INDEX || new Index();
});
