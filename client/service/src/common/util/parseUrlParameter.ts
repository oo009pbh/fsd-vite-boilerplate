import queryString from 'query-string';
import {
  QueryParamsParsingType,
  QueryStringParsingType,
} from '@typings/util/parseUrlParameters';

// 해당 함수는 query-string 라이브러리에 종속적입니다.

/**
 * @description query string 을 object 로 변경해주는 함수
 * @param {string} search  query string
 * @param {ParseOptions} options  파싱에 필요한 옵션 (query-string 라이브러리에 종속적인 Type)
 * @returns {object} query string 으로부터 파싱된 params
 */
export const buildParamsFromUrl: QueryStringParsingType = (
  search = location.search,
  options = {},
) => {
  return queryString.parse(search, options);
};

/**
 * @description 전달된 parameter를 query string 으로 변환해주는 함수
 * @param {ParamsType} tempParams {ParamsType} tempParams url로 파싱할 파라미터
 * @param {{}} options {ParseOptions | undefined} options 파싱에 필요한 옵션 (query-string 라이브러리에 종속적인 Type)
 * @param {string[]} except 제외할 키값들
 * @returns {string}
 */
export const buildUrlFromParams: QueryParamsParsingType = (
  tempParams,
  options = {},
  except = [],
) => {
  let q = '?';
  const exceptParsedParams = Object.keys(tempParams)
    .filter((key) => !except.includes(key))
    .reduce((prev, currentKey) => {
      return { ...prev, [currentKey]: tempParams[currentKey] };
    }, {});
  q += queryString.stringify(exceptParsedParams, options);

  return q;
};
