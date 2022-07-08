export interface IRequestData{
  code: number;
  data: any;
  msg: string;
}

export interface ITokenParam {
  app_id: string;
  app_secret: string;
}

export interface ITokenData {
  app_access_token: string;
  tenant_access_token: string;
  [propName: string]: string | number;
}
