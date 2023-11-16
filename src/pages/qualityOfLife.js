import parse from "html-react-parser";

function spacing(amount) {
  let send = "";
  for (var i = 0; i < amount; i++) {
    send = send + "\n<br>";
  }
  return send;
}

function SpacingCont({ amount }) {
  let str = spacing(amount);
  return <>{parse(str)}</>;
}

export { SpacingCont };
