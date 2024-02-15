import React from "react";

function Step({ img, order, title }) {
  return (
    <section className="step-text-container">
      <img className="steps-imgs" src={img} />
      <p className="step-order-text">{order}</p>
      <h2>{title}</h2>
      <p className="card-text">
        Stacks Is A Production-Ready Library Of Stackable Content Blocks Built
        In React Native.
      </p>
    </section>
  );
}

export default Step;
