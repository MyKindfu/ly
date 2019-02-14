// 根级别的 mutation
import * as types from './mutations-type.js'

const mutations = {
  /**
   * 设置角色信息
   * @param state
   * @param msg {'role','有角色信息'},{'no_role','没有角色信息'},{'no_query','没有查询角色信息'}
   */
  setRole(state, msg) {
    state.haveRole = msg
  },
  setUserId(state, msg){
    state.userId = msg
  },
  setUserInfo(state, msg){
    state.userInfo = msg
  },
  setTabType(state,msg){
    state.tabType = msg
  },
  setHeaderType(state,msg){
    state.headerType = msg
  },
  setIndexHeight(state,msg){
    state.height = msg
  },
}
export default mutations
