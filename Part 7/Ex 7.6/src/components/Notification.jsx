import { useSelector } from "react-redux";
const style = {
  padding: 0,
  margin: 0,
};
const Notification = () => {
  const notification = useSelector((state) => state.notification);
  return <h4 style={style}>{notification}</h4>;
};

export default Notification;
