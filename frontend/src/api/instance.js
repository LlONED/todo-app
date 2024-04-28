export function defaultRequest(uri, options = {}) {
  if (!options.hasOwnProperty("headers")) {
    options.headers = {};
  }

  options.headers["Content-Type"] = "application/json; charset=utf-8";

  return fetch("http://localhost:5987/api" + uri, options)
    .then((data) => data.json())
    .then((data) => {
      if (!data.success) {
        throw new Error(data.message);
      }

      return data;
    });
}
