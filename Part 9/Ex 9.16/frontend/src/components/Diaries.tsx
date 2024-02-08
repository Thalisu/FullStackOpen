import { DiaryEntry } from "../types";
const Style = {
  margin: "0",
};
const finalStyle = {
  margin: "0 0 10px",
};

const Diaries = ({ diaries }: { diaries: DiaryEntry[] }): JSX.Element[] => {
  return diaries?.map((d, i) => (
    <li key={i}>
      <p style={Style}>{d.date}</p>
      <p style={Style}>{d.weather}</p>
      <p style={finalStyle}>{d.visibility}</p>
    </li>
  ));
};

export default Diaries;
