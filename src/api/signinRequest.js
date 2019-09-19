import { apiRequest } from "./apiRequest";
import { getUrlByAlias } from "../components/routes";
import { ErrorMessage } from "../components/ErrorMessage/ErrorMessage";
import { localStorageAuth } from "../components/LocalStorageAuth/LocalStorageAuth";

export const signin = (values, history, setSubmittedHandler) => {
  const body = { user: values };
  return apiRequest("post", "signin", body).then(response => {
    signinHandler(response, history, setSubmittedHandler);
  });
};

export const signinMock = (values, history, setSubmittedHandler) => {
  return signinMockRequest({ user: values }).then(response => {
    signinHandler(response, history, setSubmittedHandler);
  });
};

const signinHandler = (response, history, setSubmittedHandler) => {
  if (response.status === 200) {
    const redirectUrl = getUrlByAlias("root");
    localStorageAuth.authenticate();
    history.push(redirectUrl);
  } else if (response.status === 401) {
    ErrorMessage(response.data.errors.title);
  } else {
    ErrorMessage("Server Error!");
  }
  setSubmittedHandler(false);
};

//stupid server mock for task #4
const signinMockRequest = data => {
  return new Promise((resolve, reject) => {
    if (data.user.email === "user@email.com" && data.user.password === "123") {
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
    } else {
      resolve({
        status: 401,
        data: {
          errors: {
            code: "unauthorized",
            title: "Unauthorized"
          }
        }
      });
    }
  });
};
