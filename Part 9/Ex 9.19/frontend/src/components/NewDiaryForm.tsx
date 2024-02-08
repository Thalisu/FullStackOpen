import useField from "../hooks/useField";
import { create } from "../services/diariesService";
import { DiaryEntry, Visibility, Weather } from "../types";

const NewDiary = ({
  diaries,
  setDiaries,
}: {
  diaries: DiaryEntry[];
  setDiaries: React.Dispatch<React.SetStateAction<DiaryEntry[]>>;
}) => {
  const date = useField("date");
  const comment = useField("text");

  const { options: weatherOptions, ...weather } = useField("select", [
    "sunny",
    "rainy",
    "cloudy",
    "stormy",
    "windy",
  ]);

  const { options: visibilityOptions, ...visibility } = useField("select", [
    "great",
    "good",
    "ok",
    "poor",
  ]);

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    try {
      const response = await create({
        date: date.value,
        weather: weather.value as Weather,
        visibility: visibility.value as Visibility,
        comment: comment.value,
      });
      const newDiaryEntry: DiaryEntry[] = diaries.concat(response);
      setDiaries(newDiaryEntry);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      date: <input {...date} />
      comment: <input {...comment} />
      weather: <select {...(weather as object)}>{weatherOptions}</select>
      visibility:{" "}
      <select {...(visibility as object)}>{visibilityOptions}</select>
      <br />
      <button>Add to diary</button>
    </form>
  );
};

export default NewDiary;
