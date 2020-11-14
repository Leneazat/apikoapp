import axios from "axios";

export const Auth = {
  _token: null,

  setToken(token) {
    this._token = token;
    window.localStorage.setItem("___token", token);
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  logout() {
    try {
      this._token = null;
      window.localStorage.removeItem("___token");
      axios.defaults.headers.common.Authorization = undefined;
    } catch (err) {
      console.log("logout error", err);
    }
  },

  isLoggedIn() {
    return !!this._token;
  },

  login({ email, password }) {
    return axios.post("/api/auth/login", {
      email,
      password,
    });
  },

  register({ fullName, email, password }) {
    return axios.post("/api/auth/register", {
      fullName,
      email,
      password,
    });
  },

  editAccount({ fullName, avatar, phone, location }) {
    return axios.put("/api/account", {
      fullName,
      avatar,
      phone,
      location,
    });
  },
};

export const Account = {
  getUser() {
    return axios.get("/api/account");
  },
};

export const Products = {
  fetchLatest() {
    return axios.get("/api/products/latest");
  },

  getById(id) {
    return axios.get(`/api/products/${id}`);
  },

  byUserId(id) {
    return axios.get(`/api/users/${id}/products`);
  },

  addProduct({ title, location, description, photos, price }) {
    return axios.post(`/api/products`, {
      title,
      location,
      description,
      photos,
      price,
    });
  },
};

export const Uploads = {
  uploadImage(file) {
    const formData = new FormData();

    formData.append("image", file);

    return axios.post(`/api/upload/images`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },
};

export const Users = {
  getById(id) {
    return axios.get(`/api/users/${id}`);
  },
};

export const Chats = {
  createChat(id, message) {
    return axios.post(`/api/products/${id}/createChat`, {
      message,
    });
  },

  getList() {
    return axios.get("/api/chats");
  },

  sendMessage(id, message) {
    return axios.post(`/api/chats/${id}/messages`, {
      message,
    });
  },

  getMessages(id) {
    return axios.get(`/api/chats/${id}/messages`);
  },
};
