import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default class InfoSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sliderIndex: 1 };
    this.next = this.next.bind(this);
    this.back = this.back.bind(this);
  }
  async next() {
    this.slider.slickNext();
    if (this.state.sliderIndex < 6) {
      this.setState({ sliderIndex: ++this.state.sliderIndex });
    }
  }
  async back() {
    this.slider.slickPrev();
    if (this.state.sliderIndex > 1) {
      this.setState({ sliderIndex: --this.state.sliderIndex });
    }
  }
  render() {
    const settings = {
      dots: false,
      arrows: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <section className="row infoslider-container">
        <div className="col-3">
          <div className="row">
            <div className="col bottom-border">ww</div>
          </div>
          <div className="row">
            <div className="col bottom-border">ww</div>
          </div>
          <div className="row">
            <div className="col bottom-border">ww</div>
          </div>
          <div className="row">
            <div className="col">ww</div>
          </div>
        </div>
        <div className="col-6 p-0">
          <div className="infoslider-slider-container">
            <Slider ref={c => (this.slider = c)} {...settings} className="test">
              <div>
                <div
                  className="slider-photo"
                  style={{ background: 'url("/images/slider/photo-1.jpg")' }}
                />
              </div>
              <div>
                <div
                  className="slider-photo"
                  style={{ background: 'url("/images/slider/photo-2.jpg")' }}
                />
              </div>
              <div>
                <div
                  className="slider-photo"
                  style={{ background: 'url("/images/slider/photo-3.png")' }}
                />
              </div>
              <div>
                <div
                  className="slider-photo"
                  style={{ background: 'url("/images/slider/photo-4.jpg")' }}
                />
              </div>
              <div>
                <div
                  className="slider-photo"
                  style={{ background: 'url("/images/slider/photo-5.jpg")' }}
                />
              </div>
              <div>
                <div
                  className="slider-photo"
                  style={{ background: 'url("/images/slider/photo-6.jpg")' }}
                />
              </div>
            </Slider>
          </div>
          <div className="slider-arrows-container">
            <i
              onClick={this.back}
              className={
                this.state.sliderIndex == 1
                  ? "slider-arrows slider-arrows-inactive fas fa-chevron-left"
                  : "slider-arrows fas fa-chevron-left"
              }
            ></i>
            <i
              onClick={this.next}
              className={
                this.state.sliderIndex == 6
                  ? "slider-arrows slider-arrows-inactive fas fa-chevron-right"
                  : "slider-arrows fas fa-chevron-right"
              }
            ></i>
          </div>
        </div>
        <div className="col-3">
          <div className="row">
            <div className="col bottom-border">ww</div>
          </div>
          <div className="row">
            <div className="col bottom-border">ww</div>
          </div>
          <div className="row">
            <div className="col bottom-border">ww</div>
          </div>
          <div className="row">
            <div className="col">{this.state.sliderIndex}</div>
          </div>
        </div>
        <style jsx>{`
          .infoslider-container {
            height: 1000px;
            padding-top: 100px;
            background-color: cyan;
          }
          .infoslider-slider-container {
            padding: 0px 24px;
            border: 3px solid #edf1f3;
            background-color: lightgreen;
            position: relative !important;
          }
          :global(.slick-list) {
            top: -50px;
          }
          .slider-photo {
            width: 100%;
            height: 400px;
            background-position: center !important;
            background-repeat: no-repeat !important;
            background-size: cover !important;
          }
          .slider-arrows-container {
            position: relative;
            bottom: 26px;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            width: 100%;
            justify-content: center;
          }
          .slider-arrows {
            font-family: "Font Awesome 5 Free" !important;
            font-weight: 900 !important;
            color: var(--main-color-black);
            margin: 0px 30px;
            background-color: #ffffff;
            width: 50px;
            height: 50px;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            border: 3px solid #edf1f3;
            box-shadow: 0px 6px 18px 0px rgba(0, 0, 0, 0);
            transition: border 0.2s ease-in-out,
              background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out,
              color 0.2s ease-in-out;
          }
          .slider-arrows:hover {
            background-color: #5e50c2;
            border: 3px solid #5e50c2;
            color: var(--main-color-white);
            box-shadow: 0px 6px 18px 0px rgba(0, 0, 0, 0.2);
          }
          .slider-arrows-inactive,
          .slider-arrows-inactive:hover {
            background-color: #FFFFFF;
            border: 3px solid #fafafa;
            box-shadow: 0px 6px 18px 0px rgba(0, 0, 0, 0);
            color: #E4E4E4;
          }
          .bottom-border {
            height: 118px;
            border-bottom: 3px solid #edf1f3;
          }
        `}</style>
      </section>
    );
  }
}
