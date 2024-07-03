// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 POST /team/add */
export async function createTeam(body: API.TeamRequest, options?: { [key: string]: any }) {
  return request<API.BaseResponseLong>('/team/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /team/delete/${param0} */
export async function deleteTeam(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteTeamParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaseResponseBoolean>(`/team/delete/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /team/get */
export async function getTeamListById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getTeamListByIdParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseTeam>('/team/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /team/join */
export async function joinTeam(body: API.TeamJoinRequest, options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean>('/team/join', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /team/list */
export async function teamList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.teamListParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageTeamUserVO>('/team/list', {
    method: 'GET',
    params: {
      ...params,
      teamQuery: undefined,
      ...params['teamQuery'],
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /team/list/my/create */
export async function myCreateTeamList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.myCreateTeamListParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageTeamUserVO>('/team/list/my/create', {
    method: 'GET',
    params: {
      ...params,
      teamQuery: undefined,
      ...params['teamQuery'],
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /team/list/my/join */
export async function myJoinTeamList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.myJoinTeamListParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageTeamUserVO>('/team/list/my/join', {
    method: 'GET',
    params: {
      ...params,
      teamQuery: undefined,
      ...params['teamQuery'],
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /team/quit/${param0} */
export async function quitTeam(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.quitTeamParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaseResponse>(`/team/quit/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /team/update */
export async function updateTeam(body: API.TeamUpdateRequest, options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean>('/team/update', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
