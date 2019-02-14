function add0(m){return m<10?'0'+m:m }
export function formatDate (today) {
  var time = new Date(today);
  var year = time.getFullYear();
  var month = time.getMonth()+1;
  var date = time.getDate();
  var hours = time.getHours();
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();
  return year+'-'+add0(month)+'-'+add0(date)
}

export function formatToday () {
  let today = new Date()
  let y = today.getFullYear()
  let m = today.getMonth() + 1
  m = m < 10 ? '0' + m : m
  let d = today.getDate()
  d = d < 10 ? ('0' + d) : d
  return y + '-' + m + '-' + d
}

export function formatLastM () {
  let today = new Date()
  let y = today.getFullYear()
  let m = today.getMonth()
  m = m < 10 ? '0' + m : m
  let d = today.getDate()
  d = d < 10 ? ('0' + d) : d
  return y + '-' + m + '-' + d
}
