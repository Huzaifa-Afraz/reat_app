import React from "react";
import emojiPedia from "../emojipedia";
import Entry from "./entry";
// {
//   id: 1,
//   emoji: "ðª",
//   name: "Tense Biceps",
//   meaning:
//     "âYou can do that!â or âI feel strong!â Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
// }
function createemoji(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      dis={emojiTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojiPedia.map(createemoji)}</dl>
    </div>
  );
}

export default App;
