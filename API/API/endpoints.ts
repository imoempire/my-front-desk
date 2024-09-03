export const BASE_ENDPOINT = 'https://receptionapi.webbermill.com/api/v1';
// export const BASE_ENDPOINT = 'http://192.168.100.187:3000/api/v1';
// export const BASE_ENDPOINT = 'http://192.168.100.165:3000/api/v1';

export const API_ENDPOINT = {
  // ORGANIZATION
  ORG_LOGIN: BASE_ENDPOINT + '/users/login',
  ORG_LOGOUT: BASE_ENDPOINT + '/users/logout',
  // staff
  GET_MY_STAFF: BASE_ENDPOINT + '/staff/getAllStaffs',
  GET_MY_GUESTS: BASE_ENDPOINT + '/guest/getAllGuestTablet',

  // departments
  GET_MY_DEPARTMENT: BASE_ENDPOINT + '/department/getAllDepartments',

  // GUEST
  GUEST_REGISTER: BASE_ENDPOINT + '/guest/createGuest',
  GUEST_LOGIN: BASE_ENDPOINT + '/guest/guestSignIn',
  GUEST_LOGOUT: BASE_ENDPOINT + '/purpose/guestSignOut',
  CONFIRM_GUEST_LOGOUT: BASE_ENDPOINT + '/purpose',
  CREATE_BULK_GUESTS: BASE_ENDPOINT + '/guest/bulkGuestCreate/create',

  // PURPOSE
  NEW_PURPOSE: BASE_ENDPOINT + '/purpose/createPurpose',
  CREATE_BULK_PURPOSE: BASE_ENDPOINT + '/purpose/bulkPurposeCreate/create',
  CREATE_BULK_LOGS: BASE_ENDPOINT + '/visitor-logs/createVisitlogs',
  GET_ALL_PURPOSE: BASE_ENDPOINT + '/purpose/getAllPurposes/Tablet',
  UPDATE_BULK: BASE_ENDPOINT + '/purpose/bulkPurposeCreate/update',

  // NOTIFICATION
  CREATE_BULK_NOTIFICATION: BASE_ENDPOINT + '/notification/bulkNotificationsCreate/create',
};
