import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";
import { getUrlByAlias } from "../../components/routes";

const signinHandler = (response, history) => {
  if (response.status === 200) {
    const redirectUrl = getUrlByAlias("root");
    history.push(redirectUrl);
  } else if (response.status === 401) {
    ErrorMessage(response.data.errors.title);
  } else {
    ErrorMessage("Server Error!");
  }
};

export default signinHandler;
