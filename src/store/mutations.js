// 根级别的 mutation
import * as types from './mutations-type.js'

const mutations = {
  /**
   * @param state
   * @param msg {
   */
  [types.ADDRESS] (state, label) {
    state.address = label
  },
}
export default mutations
