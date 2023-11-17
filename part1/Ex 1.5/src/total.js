export function Total({ exercises }) {
  let total_exercises = 0;
  for (let i = 0; i < exercises.length; i++) {
    total_exercises += exercises[i];
  }
  return (
    <div>
      <p>Number of exercises {total_exercises}</p>
    </div>
  );
}
