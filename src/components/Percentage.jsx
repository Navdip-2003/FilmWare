import React from 'react'
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
function Percentage({value}) {
  return (
    <CircularProgressbar
    value={value}
    text={`${Number(value).toFixed(0)}%`}
    background
    backgroundPadding={6}
    styles={buildStyles({
        backgroundColor: "#00000078",
        textColor: "#fff",
        pathColor: "#fff",
        trailColor: "transparent",
        textSize: '1.5rem',

    })}
/>  )
}

export default Percentage