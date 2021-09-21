import axios, { Method } from "axios";

// NOTE: This file will be copied entirely to the SDK. Any additional logic, error handling etc. can be added here as long as contract is maintained
const httpClient = async <T>(
  method: Method,
  endpoint: string,
  apiKey: string,
  path: string,
  params: { [key: string]: string | number | boolean | undefined }
): Promise<T> => {
  const url = `${endpoint}${replaceParams(path, params)}`;

  return (
    await axios.request<T>({
      method,
      url,
      headers: { "api-key": apiKey },
    })
  ).data;
};

const replaceParams = (
  url: string,
  params: { [key: string]: string | number | boolean | undefined }
): string => {
  let newUrl = url;
  Object.keys(params).forEach((k: string) => {
    newUrl = newUrl.replace(`{${k}}`, String(params[k]));
  });

  return newUrl;
};

export default httpClient;
