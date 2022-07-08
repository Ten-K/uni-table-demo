import { post } from "/@/utils/http/request";
import { ITokenParam } from "/@/types";

export const getToken = (data: ITokenParam) => {
  return post(
    "xxx",
    data
  );
};
