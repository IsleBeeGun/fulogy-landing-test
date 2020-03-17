import React from "react";

export default class Constructor extends React.Component {
  render() {
    return (
      <section className="row constructor-container">
        <div className="col">Constructor component</div>
        <div className="col">2</div>
        <style jsx>{`
          .constructor-container{
            height: 1000px;
            background-color: coral;
          }
          `}</style>
      </section>
    );
  }
}
