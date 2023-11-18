export const Content = ({ parts }) => (
  <>
    <Part part={parts[0]} />
    <Part part={parts[1]} />
    <Part part={parts[2]} />
  </>
);
const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);
