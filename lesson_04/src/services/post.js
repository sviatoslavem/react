const API = "https://694eda01b5bc648a93c1705e.mockapi.io/posts";

const service = {
  get: (id) => fetch(id ? `${API}/${id}` : API).then((data) => data.json()),
  put: (id, obj) =>
    fetch(`${API}/${id}`, {
      method: `PUT`,
      body: JSON.stringify(obj),
      headers: { "Content-type": "application/json" },
    }).then((data) => data.json()),
  delete: (id) =>
    fetch(`${API}/${id}`, {
      method: `DELETE`,
    }).then((data) => data.json()),
  post: (obj) =>
    fetch(API, {
      method: `POST`,
      body: JSON.stringify(obj),
      headers: { "Content-type": "application/json" },
    }).then((data) => data.json()),
};

export default service;
