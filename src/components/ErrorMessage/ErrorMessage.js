import { message } from "antd";

export const ErrorMessage = messageText => {
  message.error(messageText);
};
