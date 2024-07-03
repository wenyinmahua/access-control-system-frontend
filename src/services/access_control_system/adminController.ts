// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 删除出入表中的数据 POST /api/admin/access/delete */
export async function deleteAccessByIdUsingPost(
  body: API.DeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/admin/access/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 分页获取出入表 POST /api/admin/access/page */
export async function getPageAccessUsingPost(
  body: API.AccessQueryDTO,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageAccessVO_>('/api/admin/access/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改出入表中的数据 POST /api/admin/access/update */
export async function updateAccessUsingPost(body: API.Access, options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean_>('/api/admin/access/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteExceptionRecord POST /api/admin/delete/exceptionRecord */
export async function deleteExceptionRecordUsingPost(
  body: API.DeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/admin/delete/exceptionRecord', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除某个用户 POST /api/admin/delete/user */
export async function deleteUserUsingPost(
  body: API.DeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/admin/delete/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getPageExceptionRecord POST /api/admin/get/exceptionRecord */
export async function getPageExceptionRecordUsingPost(
  body: API.ExceptionRecordQueryDTO,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageExceptionRecord_>('/api/admin/get/exceptionRecord', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getLogByMonth POST /api/admin/get/log */
export async function getLogByMonthUsingPost(
  body: API.DateQueryDTO,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLogVO_>('/api/admin/get/log', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获得当前登录的管理员 GET /api/admin/get/loginAdmin */
export async function getLoginAdminUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseAdmin_>('/api/admin/get/loginAdmin', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 管理员登录 POST /api/admin/login */
export async function adminLoginUsingPost(
  body: API.AdminLoginDTO,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseAdmin_>('/api/admin/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 管理员退出登录 GET /api/admin/logout */
export async function logoutUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean_>('/api/admin/logout', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 管理员注册 POST /api/admin/register */
export async function adminRegisterUsingPost(
  body: API.AdminRegisterDTO,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/admin/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 管理员修改个人信息 POST /api/admin/update/admin */
export async function updateAdminUsingPost(body: API.Admin, options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean_>('/api/admin/update/admin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateExceptionRecord POST /api/admin/update/exceptionRecord */
export async function updateExceptionRecordUsingPost(
  body: API.ExceptionRecord,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/admin/update/exceptionRecord', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修好某个用户的个人信息 POST /api/admin/update/user */
export async function updateUserUsingPost(body: API.User, options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean_>('/api/admin/update/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 分页获取用户 POST /api/admin/user/page */
export async function getPageUserUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPageUserUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageUser_>('/api/admin/user/page', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
