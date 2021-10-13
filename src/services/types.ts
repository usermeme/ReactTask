import { ExtractRouteParams } from 'react-router';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

export type ApiRequest<TResponseData> = (
  config: AxiosRequestConfig & {
    extractRouteParams?: ExtractRouteParams<string>;
  },
) => Promise<AxiosResponse<TResponseData>>;
