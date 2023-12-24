import React from "react";
import Emojipedia from "./emojipedia";

function App() {
  const arr = [];
  Emojipedia.map(function (obj) {
    arr.push(obj.meaning.slice(0, 100));
  });

  console.log(arr);

  return <></>;
}

export default App;
