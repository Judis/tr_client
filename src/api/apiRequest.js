import axios from "axios";

export const apiRequest = (method, endpoint, data) => {
  return axios({
    method: method,
    url: endpoint,
    data: data
  })
    .then(res => {
      return { status: res.status, data: res.data };
    })
    .catch(error => {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        return { status: error.response.status, data: error.response.data };
      } else {
        return { status: null, data: {} };
      }
    });
};
