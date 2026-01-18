const service = {
  get: (API, id) =>
    fetch(id ? `${API}/${id}` : API).then((data) => data.json()),
  put: (API, id, obj) =>
    fetch(`${API}/${id}`, {
      method: `PUT`,
      body: JSON.stringify(obj),
      headers: { "Content-type": "application/json" },
    }).then((data) => data.json()),
  delete: (API, id) =>
    fetch(`${API}/${id}`, {
      method: `DELETE`,
    }).then((data) => data.json()),
  post: (API, obj) =>
    fetch(API, {
      method: `POST`,
      body: JSON.stringify(obj),
      headers: { "Content-type": "application/json" },
    }).then((data) => data.json()),
};

export default service;
