import React, { useContext } from "react";
import { store } from "../state";

function Synth(props) {
  const { state, dispatch } = useContext(store);

  console.log(state);
  return <div></div>;
}

export default Synth;
