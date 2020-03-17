import React from "react";

export default class Stages extends React.Component {
  render() {
    return (
      <article className="row stages-container">
        <div className="col">Stages component</div>
        <div className="col">2</div>
        <style jsx>{`
          .stages-container{
            height: 1000px;
            background-color: plum;
          }
          `}</style>
      </article>
    );
  }
}
