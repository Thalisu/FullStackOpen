export const Total = ({ total }) => (
  <p>
    Number of exercises{" "}
    {total.reduce((sum, parts) => {
      return sum + parts.exercises;
    }, 0)}
  </p>
);
