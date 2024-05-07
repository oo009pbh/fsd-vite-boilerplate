import axios from 'axios';

import { ApiType } from '@typings/api/api';
import { ParamsType } from '@typings/commonUseType';

const apiUrl = 'https://date.nager.at/api/v3/';

export const createAxiosInstance = (baseUrl?: string) => {
  // baseUrl 설정이 없다면 기본 API URL로 설정된다.
  const instance = axios.create({
    baseURL: baseUrl || apiUrl,
    timeout: 6000000,
  });
  return instance;
};

export const replacePathParams = (path: string, parameters: ParamsType) => {
  const paramKeys = Object.keys(parameters);
  const pathItems = path?.toString()?.split('/');
  let realParams = {};

  // eslint-disable-next-line no-restricted-syntax
  for (const key of paramKeys) {
    const index = pathItems?.indexOf(`{${key}}`);

    if (index > -1) {
      pathItems[index] = parameters[key];
    } else {
      realParams = { ...realParams, [key]: parameters[key] };
    }
  }
  return { realPath: pathItems?.join('/').toString(), apiParams: realParams };
};
/**
 * @description GET method
 *
 * @param {string} path API path 정보
 * @param {{}} parameters API 파라미터 객체
 * @param {string | undefined} baseUrl API baseUrl의 변경이 필요한 경우 직접 입력
 * @param config
 * @returns {Promise<any>}
 */
export const get: ApiType = <T>(
  path: string,
  parameters?: ParamsType,
  baseUrl?: string,
): Promise<T> => {
  const { realPath, apiParams } = replacePathParams(path, parameters || {});
  const instance = createAxiosInstance(baseUrl);

  return instance
    .get<T>(realPath, apiParams)
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((err) => {
      console.log(`/Lib/Api/index.js :: GET :: ${realPath} :: Failed!`);
      return Promise.reject(err);
    });
};

/**
 * @description POST method
 * @param path {string} API path 정보
 * @param parameters {object} API 파라미터 객체
 *
 * @return {Promise<unknown>}
 */
/**
 * @description POST method
 *
 * @param {string} path API path 정보
 * @param {{}} parameters API 파라미터 객체
 * @param {string | undefined} baseUrl
 * @returns {Promise<any>}
 */
export const post: ApiType = <T>(
  path: string,
  parameters?: ParamsType,
  baseUrl?: string,
): Promise<T> => {
  const { realPath, apiParams } = replacePathParams(path, parameters || {});
  const instance = createAxiosInstance(baseUrl);

  return instance
    .post<T>(realPath, apiParams)
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((err) => {
      console.log(`/Lib/Api/index.js :: POST :: ${realPath} :: Failed!`);
      return Promise.reject(err);
    });
};

/**
 * @description patch method
 *
 * @param {string} path API path 정보
 * @param {{}} parameters API 파라미터 객체
 * @param {string | undefined} baseUrl
 * @returns {Promise<any>}
 */
export const patch: ApiType = <T>(
  path: string,
  parameters?: ParamsType,
  baseUrl?: string,
): Promise<T> => {
  const { realPath, apiParams } = replacePathParams(path, parameters || {});
  const instance = createAxiosInstance(baseUrl);

  return instance
    .patch<T>(realPath, apiParams)
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((err) => {
      console.log(`/Lib/Api/index.js :: POST :: ${realPath} :: Failed!`);
      return Promise.reject(err);
    });
};

/**
 * @description PUT method
 * @param path {string} API path 정보
 * @param parameters {object} API 파라미터 객체
 * @param {string | undefined} baseUrl API baseUrl의 변경이 필요한 경우 직접 입력
 *
 * @return {Promise<unknown>}
 */
export const put: ApiType = <T>(
  path: string,
  parameters?: ParamsType,
  baseUrl?: string,
): Promise<T> => {
  const { realPath, apiParams } = replacePathParams(path, parameters || {});
  const instance = createAxiosInstance(baseUrl);

  return instance
    .put<T>(realPath, apiParams)
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((err) => {
      console.log(`/Data/Api/index.js :: PUT :: ${realPath} :: Failed!`);
      return Promise.reject(err);
    });
};

/**
 * @description DELETE method
 * @param path {string} API path 정보
 * @param parameters {object} API 파라미터 객체
 * @param {string | undefined} baseUrl API baseUrl의 변경이 필요한 경우 직접 입력
 *
 * @return {Promise<unknown>}
 */
export const del: ApiType = <T>(
  path: string,
  parameters?: ParamsType,
  baseUrl?: string,
): Promise<T> => {
  const { realPath, apiParams } = replacePathParams(path, parameters || {});
  const instance = createAxiosInstance(baseUrl);

  return instance
    .delete<T>(realPath, { data: apiParams })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((err) => {
      console.log(`/Data/Api/index.js :: DELETE :: ${realPath} :: Failed!`);
      return Promise.reject(err);
    });
};
