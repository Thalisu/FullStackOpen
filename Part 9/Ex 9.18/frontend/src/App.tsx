import { useEffect, useState } from "react";
import { getAll } from "./services/diariesService";
import { DiaryEntry } from "./types";
import Diaries from "./components/Diaries";
import NewDiary from "./components/NewDiaryForm";

const App = () => {
  const [diaries, setDiaries] = useState<DiaryEntry[]>([]);
  useEffect(() => {
    getAll().then((data) => setDiaries(data));
  }, []);

  return (
    <div>
      <NewDiary diaries={diaries} setDiaries={setDiaries} />
      <ul>
        <Diaries diaries={diaries} />
      </ul>
    </div>
  );
};

export default App;
