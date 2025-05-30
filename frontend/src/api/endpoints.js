export const API_URLS = {
  GET_PRODUCTS: "/api/product",
  GET_PRODUCT_BY_ID: (id) => `/api/product/${id}`,
  GET_PRODUCT_BY_GENDER: (gender) => `/api/product/by-gender?gender=${gender}`,
  GET_PRODUCT_BY_CATEGORY: (categoryID) =>
    `/api/product/by-category?categoryID=${categoryID}`,
  GET_CATEGORIES: "/api/category",
  GET_CATEGORY_BY_ID: (id) => `/api/category/${id}`,
  AUTHENTICATION_LOGIN: "/api/auth/login",
  AUTHENTICATION_REGISTER: "/api/auth/register",
  AUTHENTICATION_VERIFY_CODE: "/api/auth/verify-code",
  GET_USER_DETAILS: "/api/user/profile",
  CREATE_ORDER: "/api/orders",
  CONFIRM_PAYMENT: "/api/orders/update-payment",
  ADD_NEW_ADDRESS: "/api/address",
  DELETE_ADDRESS: (id) => `/api/address/${id}`,
  GET_ORDERS_BY_USER: "/api/orders/user",
  GET_ALL_ORDERS: "/api/orders",
  UPDATE_ORDER_DELIVERY_STATUS: (id) => `/api/orders/${id}`,
  ADD_NEW_PRODUCT: "/api/product",
};

export const API_BASE_URL = "http://localhost:8080";
