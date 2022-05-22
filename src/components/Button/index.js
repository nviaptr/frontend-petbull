import "./button.css"

export default function ButtonText({nama, tesClick}) {
  return (
    <button onClick={tesClick}>{nama}</button>
  );
}
