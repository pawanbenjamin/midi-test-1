import React, { useContext, useEffect } from "react";
import { store } from "../state";

import * as Tone from "tone";

function Synth(props) {
  const { state, dispatch } = useContext(store);

  console.log(state);

  const synth = new Tone.PolySynth().toDestination();
  const now = Tone.now();
  useEffect(() => {
    state.notes.map((note) => {
      synth.triggerAttackRelease(note.note, "8n");
    });
  });

  return <div></div>;
}

export default Synth;
