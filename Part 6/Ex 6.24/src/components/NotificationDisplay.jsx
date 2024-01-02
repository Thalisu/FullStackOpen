import { useNotificationValue } from "../NotificationContext";
const NotificationDisplay = () => {
  const notification = useNotificationValue();
  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
  };
  return notification ? <h2 style={style}>{notification}</h2> : "";
};
export default NotificationDisplay;
