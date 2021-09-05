import { useEffect, useState } from "react";
import "./App.css";
import MIDI from "./components/MIDI";
import Synth from "./components/Synth";
import { StateProvider } from "./state";

function App() {
  const [command, setCommand] = useState(null);
  const [note, setNote] = useState(null);
  const [velocity, setVelocity] = useState(0);
  return (
    <StateProvider>
      <div className="App">
        <MIDI
          setCommand={setCommand}
          setNote={setNote}
          setVelocity={setVelocity}
        />
        <Synth />
      </div>
    </StateProvider>
  );
}

export default App;
