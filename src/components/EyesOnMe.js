// Code EyesOnMe Component Here
import React from "react";

export default function EyesOnMe() {
  // function focus() {
  //   console.log("Good!");
  // }

  // function blur() {
  //   console.log("Hey! Eyes on me!");
  // }
  return (
    <div>
      <button
        onFocus={(e) => {
          console.log("Good!");
        }}
        // onClick={() => {
        //   focus();
        //   blur();
        // }}

        onBlur={(e) => {
          console.log("Hey! Eyes on me!");
        }}
      >
        Eyes on me
      </button>
    </div>
  );
}
