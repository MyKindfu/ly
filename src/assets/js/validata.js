let validata = {
  /**
   * 手机号验证
   * @param rule
   * @param value
   * @param callback
   */
  phoneValidata(rule, value, callback) {
    console.log('phoneValidata', value)
    if (value) {
      // var reg = /^[1][0-9]{10}|(0[0-9]{2,3}\/-)?([2-9][0-9]{6,7})+(\/-[0-9]{1,4})?$/
      var reg = /^[1][0-9]{10}$/
      console.log(reg.test(value))
      if (reg.test(value)) {
        callback()
      } else {
        callback(new Error('请输入正确的电话号码'))
      }
    }
    callback()
  },
  urlValidate(rule, value, callback) {
    if(!value){
      callback()
    }
    var reg = /^((https|http)?:\/\/)[^\s]+$/
    if (reg.test(value)) {
      callback()
    } else {
      callback(new Error('请输入正确的URL地址'))
    }
  },
  /**
   * 登录账号验证
   * @param rule
   * @param value
   * @param callback
   */
  accountValidata(rule, value, callback) {
    if (value === '') {
      callback(new Error('请输入登录账号'))
    } else {
      var reg = /^[a-zA-Z0-9]{4,16}$/
      if (reg.test(value)) {
        callback()
      } else {
        callback(new Error('请输入正确的用户名，4到16位（字母，数字）'))
      }
    }
  },
  /**
   * 密码验证
   */
  pwdValidate(rule, value, callback) {
    if (value === '') {
      callback(new Error('请输入密码'))
    } else {
      var v1 = /[a-z]/
      var v2 = /[A-Z]/
      var v3 = /[0-9]/
      var v4 = /\W/
      var sum = 0
      if (v1.test(value)) {
        sum = sum + 1
      }
      if (v2.test(value)) {
        sum = sum + 1
      }
      if (v3.test(value)) {
        sum = sum + 1
      }
      if (v4.test(value)) {
        sum = sum + 1
      }
      if (sum >= 3) {
        callback()
      } else {
        callback(new Error('请输入正确的密码，密码包含大写字母，小写字母，数字，特殊字符中三种'))
      }
    }
  },
  /**
   * 密码确认验证
   * @param rule
   * @param value
   * @param callback
   * @param firstPwd  第一次输入的密码
   */
  pwdConfirm(rule, value, callback, firstPwd) {
    if (!value || value === '') {
      callback(new Error('请再次输入密码'))
    } else if (value !== firstPwd) {
      callback(new Error('两次输入密码不一致!'))
    } else {
      callback()
    }
  },
  roles(rule, value, callback, roles) {
    var role = roles === null ? null : roles
    var educationOrgs = value === null ? null : value[value.length - 1]
    if (role.indexOf('STUDENT') > -1 || role.indexOf('TEACHER') > -1) {
      if (!educationOrgs || educationOrgs === '') {
        callback(new Error('角色选择"学生"或"老师"，必须选择"教学组织"'))
      }
    }
    callback()
  },
  hrOrg(rule, value, callback, roles) {
    var role = roles === null ? null : roles
    var hrOrgs = value === null ? null : value[value.length - 1]
    if (role.indexOf('STAFF') > -1) {
      if (!hrOrgs || hrOrgs === '') {
        callback(new Error('角色选择"教职工"，必须选择"教务组织"'))
      }
    }
    callback()
  },
  testLease(rule, value, callback) {
    if (value === '') {
      callback(new Error('请选择租期'))
    } else {
      if (value > 1) {
        callback()
      } else {
        callback(new Error('请选择租期,租期最短一个月'))
      }
    }
  }
}
export {validata}
