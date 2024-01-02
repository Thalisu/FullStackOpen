import { createContext, useReducer, useContext } from "react";

const notificationReducer = (state, action) => {
  return action.payload;
};

const NotificationContext = createContext();

export const NotificationContextProvider = (props) => {
  const [notification, notificationDispatch] = useReducer(
    notificationReducer,
    ""
  );

  return (
    <NotificationContext.Provider value={[notification, notificationDispatch]}>
      {props.children}
    </NotificationContext.Provider>
  );
};

export const useNotificationDispatch = () => {
  const notificationAndDispatch = useContext(NotificationContext);
  return (content, timeoutInSec) => {
    const dispatch = notificationAndDispatch[1];
    dispatch({ payload: content });
    setTimeout(() => {
      dispatch("");
    }, timeoutInSec * 1000);
  };
};
export const useNotificationValue = () => {
  const notificationAndDispatch = useContext(NotificationContext);
  return notificationAndDispatch[0];
};

export default NotificationContext;
