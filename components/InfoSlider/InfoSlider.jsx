import React from "react";

export default class InfoSlider extends React.Component {
  render() {
    return (
      <section className="row infoslider-container">
        <div className="col-3">1</div>
        <div className="col-6">
          <div className="slider-container"></div>
        </div>
        <div className="col-3">3</div>
        <style jsx>{`
          .infoslider-container{
            height: 1000px;
            background-color: cyan;
          }
          `}</style>
      </section>
    );
  }
}
