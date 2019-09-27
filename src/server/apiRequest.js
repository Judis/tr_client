import axios from "axios";

const apiRequest = (method, endpoint, data) => {
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

export const signinRequest = values => {
  const body = { user: values };
  return apiRequest("post", "sign-in", body);
};

//stupid mock for task #4
export const signinMockRequest = values => {
  return new Promise((resolve, reject) => {
    if (values.email === "error@email.com") {
      resolve({
        status: 401,
        data: {
          errors: {
            code: "unauthorized",
            title: "Unauthorized"
          }
        }
      });
    } else {
      resolve({
        status: 200,
        data: {
          meta: {
            message:
              "You are successfully logged in! Add this token to authorization header to make authorized requests."
          },
          data: {
            type: "session",
            attributes: {
              token: "AUTH_TOKEN"
            }
          }
        }
      });
    }
  });
};
