import Base from "./base";
import { API_ENDPOINT } from "../../API/endpoints";
import http from "../../API/https";
import { LoginProps, GuestLoginProps } from "@/constants/FormProps";
import axios from "axios";

// User Repository
class User extends Base {
  http = async (url: string, type?: any, variables?: object, options?: any) => {
    // @ts-ignore
    return http[type](url, variables, options);
  };

  me = async (url: string) => {
    return this.http(url, "get");
  };

  get = async (url: string) => {
    return this.http(url, "get");
  };

  // ORGANIZATION
  login = async (variables: LoginProps) => {
    return axios.post(API_ENDPOINT.ORG_LOGIN, variables);
  };

  getStaff = async (url: string) => {
    return this.find(url);
  };

  // GUEST
  guestlogin = async (variables: GuestLoginProps) => {
    return http.post(API_ENDPOINT.GUEST_LOGIN, variables);
  };

  guestlogout = async (variables: {
    countryCode: string;
    phoneNumber: string;
  }) => {
    return http.post(API_ENDPOINT.GUEST_LOGOUT, variables);
  };

  confirmguestlogout = async (
    variables: { countryCode: string; phoneNumber: string },
    purposeId: string
  ) => {
    return http.post(
      API_ENDPOINT.CONFIRM_GUEST_LOGOUT + "/" + purposeId,
      variables
    );
  };

  guestregister = async (
    variables: {
      organizationId: string;
      firstName: string;
      lastName: string;
      gender: string;
      countryCode: string;
      phoneNumber: string;
    }
  ) => {
    return http.post(API_ENDPOINT.GUEST_REGISTER, variables);
  };

  bulkGuestsRegister = async (variables: object[]) => {
    return http.post(API_ENDPOINT.CREATE_BULK_GUESTS, variables);
  };

  guestPurpose = async (
    variables: {
      guestId: string;
      organizationId: string;
      purpose: string;
      departmentId: string;
      staffId: string;
    }
  ) => {
    return http.post(API_ENDPOINT.NEW_PURPOSE, variables);
  };

  createBulkPurpose = async (variables: object[]) => {
    return http.post(API_ENDPOINT.CREATE_BULK_PURPOSE, variables);
  };

  bulkPurposeLogs = async (variables: object[]) => {
    return http.post(API_ENDPOINT.CREATE_BULK_LOGS, variables);
  };

  getallPurposes = async (url: string) => {
    return this.find(url);
  };

  updatePurpose = async (variables: object[]) => {
    return http.patch(API_ENDPOINT.UPDATE_BULK, variables);
  };

  bulkNotification = async (variables: object[]) => {
    return http.post(API_ENDPOINT.CREATE_BULK_NOTIFICATION, variables);
  };

  logout = async (variables: { password: string }) => {
    return http.post(API_ENDPOINT.ORG_LOGOUT, variables);
  };
}

export default new User();
