import React from "react";

export default class Reviews extends React.Component {
  render() {
    return (
      <section className="row reviews-container">
        <div className="col">Reviews component</div>
        <div className="col">2</div>
        <style jsx>{`
          .reviews-container{
            height: 1000px;
            background-color: yellowgreen;
          }
          `}</style>
      </section>
    );
  }
}

