export const Content = ({ content }) => (
  <>
    {content.map((part, i) => {
      return (
        <p key={i}>
          {part.name} {part.exercises}
        </p>
      );
    })}
  </>
);
