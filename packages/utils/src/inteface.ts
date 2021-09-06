interface getTopicsResDataItem {
  [propName: string]: any
}

export interface getTopicsRes {
  success: boolean,
  data: getTopicsResDataItem
}

interface resHeaders {
  [propName: string]: any
}

interface resConfig {
  [propName: string]: any
}

interface resRequest {
  [propName: string]: any
}

interface resData {
  success: boolean,
  data: any
}

export interface response {
  status: number,
  statusText: string,
  headers: resHeaders,
  config: resConfig,
  request: resRequest,
  data?: resData
}

export interface o {
  [propName: string]: any
}
