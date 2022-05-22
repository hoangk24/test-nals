import { VITE_API_URL, VITE_API_VERSION } from "configs";

const BASE_URL = `${VITE_API_URL}/api/${VITE_API_VERSION}`;

const API_ENPOINT = {
 BLOGS: "/blogs",
 COMMENTS: "/comments",
 AUTHORIZATION: {
  LOGIN: "/login",
  LOGOUT: "/logout",
  ME: "/ME",
 },
};
