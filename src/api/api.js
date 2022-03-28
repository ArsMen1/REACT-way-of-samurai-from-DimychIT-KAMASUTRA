import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "a4061475-4a05-4eca-a059-880dd4b5fb86",
  },
});

export const userAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data); // Возвращаем не весь респонс а только необходимые коспоненте данные
  },
  follow(u, props) {
    return instance.post(`follow/${u.id}`, {}, {}).then((response) => {
      if (response.data.resultCode === 0) {
        props.follow(u.id);
      }
      props.toggleFollowingProgress(false, u.id);
    });
  },
  unfollow(u, props) {
    return instance.delete(`follow/${u.id}`, {}).then((response) => {
      if (response.data.resultCode === 0) {
        props.unfollow(u.id);
      }
      props.toggleFollowingProgress(false, u.id);
    });
  },
  getMePage(userId, props) {
    return instance.get(`profile/${userId}`).then((response) => {
      props.setUserProfile(response.data);
    });
  },
};
