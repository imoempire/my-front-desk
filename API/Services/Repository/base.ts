import http from "../../API/https";

export default class Base {
  http = async (url: string, type: any, variables?: object, options?: any) => {
    // @ts-ignore
    return http[type](url, variables, options);
  };
  all = async (url: string) => {
    return this.http(url, "get");
  };

  getAll = async (url: string) => {
    return this.http(url, "get");
  };

  find = async (url: string) => {
    return this.http(url, "get");
  };

  create = async (url: string, variables: object) => {
    return this.http(url, "post", variables);
  };

  update = async (url: string, variables: object) => {
    return this.http(url, "put", variables);
  };

  delete = async (url: string) => {
    return this.http(url, "delete");
  };
}
