function format (date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
    }
  }
  return fmt;
};

function padLeftZero (str) {
  return ('00' + str).substr(str.length)
}

function formatDate (time) {
  let date = new Date(time)
  return format(date, 'yyyy-MM-dd hh:mm')
}
function formatDateTime(time) {
  let date = new Date(time)
  return format(date, 'hh:mm')
}
function sliceList1(list) {
  return list.slice(0, 12)
}
function sliceList2(list) {
  return list.slice(12)
}

function noticeDate(value) {
  let date = new Date(value)
  let dat = date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate()

  let newDate = new Date()
  let newDay = newDate.getDate()
  let newMonth = newDate.getMonth()+1
  let newYear = newDate.getFullYear()
  let newDat = newYear + '-' + newMonth + '-' + newDay

  if (dat === newDat) {//今天
    let min = date.getMinutes() > 9 ? date.getMinutes() : '0'+date.getMinutes()
    let hour = date.getHours() > 9 ? date.getHours() : '0'+date.getHours()
    return hour + ':' + min
  }

  //昨天
  let yesterday
  if(newDay == 1){
    if(newYear % 4 === 0 && newMonth === 3 ){//闰年2月
      yesterday = newYear + '-' + (newMonth - 1) + '-29'
    }else if(newMonth === 3 ){
      yesterday = newYear + '-' + (newMonth - 1) + '-28'
    }else if(newMonth === 1 ){
      yesterday = (newYear-1) + '-12-31'
    }else if(newMonth === 2 || newMonth === 4|| newMonth === 6|| newMonth === 8|| newMonth === 9|| newMonth === 11){
      yesterday = newYear + '-' + (newMonth - 1) + '-31'
    }else if(newMonth === 5 || newMonth === 7|| newMonth === 10|| newMonth === 12){
      yesterday = newYear + '-' + (newMonth - 1) + '-30'
    }
  }else{
    yesterday = newYear + '-' + newMonth + '-' + (newDay - 1)
  }
  if (dat === yesterday) {//昨天
    let min = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes()
    let hour = date.getHours() > 9 ? date.getHours() : '0' + date.getHours()
    return '昨天 '+hour + ':' + min
  }
  //年份相等
  if(newYear === date.getFullYear()){
    return date.getMonth() + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes()
  }
  //日期
  return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes()
}
function attendanceDate(value){
  let date = new Date(value)

  let a = ["日", "一", "二", "三", "四", "五", "六"];
  let week = date.getDay();
  let weekName = "星期"+ a[week];
  let hour = date.getHours() > 9 ? date.getHours() : '0'+date.getHours();
  let min = date.getMinutes() > 9 ? date.getMinutes() : '0'+date.getMinutes();

  let dat = date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate() + ' ' + hour + ':' + min + '('+weekName+')'
  return dat;
}
function rankFilter(val) {
  const obj = {
    4:'C',
    5:'B',
    6: 'B',
    7: 'B',
    8: 'A',
    9: 'A',
    10: 'A'
  }
  if(val){
    return obj[val]
  }
  return ''
}
function rankFilter2(val) {
  const obj = {
    4:'',
    5:'-',
    6: '',
    7: '+',
    8: '-',
    9: '',
    10: '+'
  }
  if(val){
    return obj[val]
  }
  return ''
}
function backgroundFilter(val) {
  const obj = {
    4: '#ffd801',
    5: '#ffc001',
    6: '#ff9601',
    7: '#f87c01',
    8: '#ff6442',
    9: '#ff5029',
    10: '#f02c00'
  }
  if(val){
    return 'background:' +  obj[val]
  }
  return ''
}
function recordStatus(val) {
  const obj = {
    'NORMAL':'正常',
    'LEAVE':'请假',
    'LATE': '迟到',
    'LEAVE_EARLY': '早退',
  }
  if(val){
    return obj[val]
  }
  return ''
}
function recordStatusColor(val) {
  const obj = {
    'NORMAL':'#37A4ED',
    'LEAVE':'#9EDA43',
    'LATE': '#FF9658',
    'LEAVE_EARLY': '#F66C67',
  }
  if(val){
    return 'border-color:' + obj[val] + ';' + 'color:' + obj[val]
  }
  return ''
}
function subjectFilter(val) {
  const obj = {
    'LANGUAGE':'语文',
    'MATHEMATICS':'数学',
    'PHYSICAL': '物理',
    'ENGLISH': '英语',
    'CHEMISTRY': '化学',
    'HISTORY': '历史',
    'GEOGRAPHY': '地理'
  }
  if(val){
    return  obj[val]
  }
  return ''
}
function filterActStatus(val){
  const obj = {
      'process':'进行中',
      'nostart':'未开始',
      'end': '已结束',
    }
    if(val){
      return  obj[val]
    }
    return ''
}
function filterActColor() {
  const obj = {
      'process':'cond-color',
      'nostart':'nostart-color',
      'end': 'end-color',
    }
    if(val){
      return  obj[val]
    }
    return ''
}
export { formatDate, filterActStatus, filterActColor}