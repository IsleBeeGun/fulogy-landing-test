import React from "react";

export default class About extends React.Component {
  render() {
    return (
      <article className="row about-container">
        <div className="col">About component</div>
        <div className="col">2</div>
        <style jsx>{`
          .about-container{
            height: 1000px;
            background-color: plum;
          }
          `}</style>
      </article>
    );
  }
}
