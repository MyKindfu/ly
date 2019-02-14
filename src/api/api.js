import request from '@/utils/request'
 /* 精选应用*/
export const getJinxuan = params => {return request.get('/ac/me/app_isv/recommendApp/page',params) }

/* 应用详情 */
export const appDetail = params => {return request.get('/ac/me/app_isv/'+params) }

/* 添加应用*/
export const addApp = params => {return request.post('/ac/user_app',params) }

/* 移除应用*/
export const deleteApp = params => {return request.delete('/ac/user_apps/'+params) }

/* 获取评论列表*/
export const comment = params => {return request.get('/ac/me/app_comment/'+params) }

/*添加评论*/
export const addComment = params => {return request.post('/ac/me/app_comment',params) }

