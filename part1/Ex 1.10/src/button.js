export function Button({ text, clickHandler }) {
  return <button onClick={() => clickHandler(text)}>{text}</button>;
}
