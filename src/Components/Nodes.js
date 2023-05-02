import React from "react";

function Nodes({ top, left, name, scaleX }) {
  return (
    <article
      className={name}
      id="nodes-section"
      style={{
        top: top,
        left: left,
        transform: `scale(.7) ${scaleX ? scaleX : ""}`,
      }}
    >
      <section id="circle-1"></section>
      <section id="connector-1"></section>
      <section id="circle-2"></section>
      <section id="connector-2"></section>
      <section id="circle-3"></section>
    </article>
  );
}

export default Nodes;
