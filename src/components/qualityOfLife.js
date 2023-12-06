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

function isUnd(check, base) {
  if (check == undefined || check == null) {
    return base;
  } else {
    return check;
  }
}

function isUnd2(check, addCheck, base) {
  if (check == undefined || check > addCheck || check == null) {
    return base;
  } else {
    return check;
  }
}

export { SpacingCont, isUnd, isUnd2 };
