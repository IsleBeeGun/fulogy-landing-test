import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class InfoSlider extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <section className="row infoslider-container">
        <div className="col-3">1</div>
        <div className="col-6">
          <div className="infoslider-slider-container">
            <Slider {...settings}>
              <div>
                <div
                  className="slider-photo"
                  style={{background: 'url("/images/slider/photo-1.jpg")'}}
                />
              </div>
              <div>
                <div
                  className="slider-photo"
                  style={{background: 'url("/images/slider/photo-2.jpg")'}}
                />
              </div>
              <div>
                <div
                  className="slider-photo"
                  style={{background: 'url("/images/slider/photo-3.png")'}}
                />
              </div>
              <div>
                <div
                  className="slider-photo"
                  style={{background: 'url("/images/slider/photo-4.jpg")'}}
                />
              </div>
              <div>
                <div
                  className="slider-photo"
                  style={{background: 'url("/images/slider/photo-5.jpg")'}}
                />
              </div>
              <div>
                <div
                  className="slider-photo"
                  style={{background: 'url("/images/slider/photo-6.jpg")'}}
                />
              </div>
            </Slider>
          </div>
        </div>
        <div className="col-3">3</div>
        <style jsx>{`
          .infoslider-container {
            height: 1000px;
            background-color: cyan;
          }
          .infoslider-slider-container {
            background-color: transparent;
          }
          .slider-photo {
            width: 100%;
            height: 377px;
            background-position: center !important;
            background-repeat: no-repeat !important;
            background-size: cover !important;

          }

        `}</style>
      </section>
    );
  }
}
