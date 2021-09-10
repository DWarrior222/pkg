interface resHeaders {
  server?: string,
  date?: string,
  'content-type'?: string,
  'content-length'?: string,
  connection?: string,
  'x-powered-by'?: string,
  'x-frame-options'?: string,
  'access-control-allow-origin'?: string,
  etag?: string,
  vary?: string,
  'x-response-time'?: string,
  'strict-transport-security'?: string,
}

interface resData {
  success: boolean,
  data: resDataItem[]
}

interface resDataItem {
  "id": string,
  "author_id": string,
  "tab": string,
  "content": string,
  "title": string,
  "last_reply_at": string,
  "good": boolean,
  "top": boolean,
  "reply_count": number,
  "visit_count": number,
  "create_at": string,
  "author": {
    "loginname": string,
    "avatar_url": string,
  }
}


export interface response {
  status: number,
  statusText: string,
  headers: resHeaders,
  data?: resData
}

export interface o {
  arr: string[]
}
