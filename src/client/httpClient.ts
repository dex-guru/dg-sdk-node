import axios, { Method } from "axios";

const version = require("../../package.json").version;

// NOTE: This file will be copied entirely to the SDK. Any additional logic, error handling etc. can be added here as long as contract is maintained
const httpClient = async <T>(
  method: Method,
  endpoint: string,
  apiKey: string,
  path: string,
  params: { [key: string]: string | number | boolean | undefined }
): Promise<T> => {
  const url = `${endpoint}${addParams(path, params)}`;

  console.log(url)

  const request = axios.request<T>({
      method,
      url,
      headers: {
        "api-key": apiKey,
        "User-Agent": `JavaScript DexGuru SDK v${version}`,
        "Accept": 'application/json'
      }
  }
  )

    return request
        .catch(e => {
            const response = e.response
            console.error(e)
            console.error(`Failed with status code ${response.status}`)
            return Promise.reject(e)
        })
        .then(r => r.data)
};

const addParams = (
  url: string,
  params: { [key: string]: string | number | boolean | undefined }
): string => {

  if(Object.keys(params).length === 0) {
      return url
  }

  let newUrl = url

  Object.keys(params).forEach((k: string) => {
     // path param
      if(newUrl.includes(`{${k}}`)) {
          newUrl = newUrl.replace(`{${k}}`, String(params[k]));
      } else {
          // query param
          if(params[k] !== undefined) {
              if(!newUrl.includes('?')) {
                  newUrl = `${newUrl}?`;
              }
              newUrl = newUrl+= `${k}=${params[k]}&`
          }
      }
  });

  if(newUrl.endsWith('&')) {
      newUrl.slice(0, -1)
  }

  return newUrl;
};

export default httpClient;
