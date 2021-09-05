import React, { useEffect, useState, useContext } from "react";
import { store } from "../state";

function MIDI({ setNote, setVelocity, setCommand }) {
  const { state, dispatch } = useContext(store);
  useEffect(() => {
    navigator.requestMIDIAccess().then(function (access) {
      // Get lists of available MIDI controllers
      const inputs = access.inputs.values();
      const outputs = access.outputs.values();

      function getMIDIMessage(midiMessage) {
        const command = midiMessage.data[0];
        const note = midiMessage.data[1];
        const velocity = midiMessage.data.length > 2 ? midiMessage.data[2] : 0;
        // console.log("command: ", command);
        // console.log("note: ", note);
        // console.log("veloctiy: ", velocity);
        dispatch({ type: "note", value: { command, note, velocity } });
      }

      for (let input of inputs) {
        input.onmidimessage = getMIDIMessage;
      }

      for (let output of outputs) {
        output.onmidimessage = getMIDIMessage;
      }

      access.onstatechange = function (e) {
        // Print information about the (dis)connected MIDI controller
        console.log(e.port.name, e.port.manufacturer, e.port.state);
      };
    });
  }, []);
  return null;
}

export default MIDI;
