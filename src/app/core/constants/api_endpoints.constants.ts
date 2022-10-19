export const API_ENDPOINTS = {
  USERS: {
    BASE_PATH: 'users',
    BY_ID: (id: number) => `${API_ENDPOINTS.USERS.BASE_PATH}/${id}`,
    ICON: (id: number) => `${API_ENDPOINTS.USERS.BASE_PATH}/${id}/icon`,
  },
  SESSION: {
    BASE_PATH: 'session',
    LOG_IN: () => `${API_ENDPOINTS.SESSION.BASE_PATH}/log-in`,
    SIGN_UP: () => `${API_ENDPOINTS.SESSION.BASE_PATH}/sign-up`,
  },
};
