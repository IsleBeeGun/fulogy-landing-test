import React from "react";
import { Modal, Button } from "reactstrap";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { switcherImage: "/images/switcher-gold.png", modal: false };
    this.changeSwitcherImage = this.changeSwitcherImage.bind(this);
    this.toggleVideoModal = this.toggleVideoModal.bind(this);
  }
  changeSwitcherImage(event) {
    switch (event.target.title) {
      case "Золотой цвет":
        this.setState({ switcherImage: "/images/switcher-gold.png" });
        break;
      case "Белый цвет":
        this.setState({ switcherImage: "/images/switcher-white.png" });
        break;
      case "Чёрный цвет":
        this.setState({ switcherImage: "/images/switcher-black.png" });
        break;
      case "Серебряный цвет":
        this.setState({ switcherImage: "/images/switcher-silver.png" });
        break;
      default:
        this.setState({ switcherImage: "/images/switcher-gold.png" });
        break;
    }
  }
  toggleVideoModal() {
    this.state.modal
      ? this.setState({ modal: false })
      : this.setState({ modal: true });
  }
  render() {
    return (
      <section className="row home-container">
        <Modal
          size="lg"
          contentClassName="video-modal-container"
          isOpen={this.state.modal}
          toggle={this.toggleVideoModal}
          centered={true}
        >
          <div>
            <iframe
              className="video-modal-iframe"
              width="100%"
              height="100%"
              src="//www.youtube.com/embed/WxBXcKXHOdU?modestbranding=1&autoplay=1&showinfo=0&controls=0&rel=0&playlist=WxBXcKXHOdU"
              // ?enablejsapi=1&origin=http://myWebSite.com   <-- You should include your site address when it is known
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </Modal>
        <div className="col">
          <div className="row">
            <div className="col home-info-container">
              <div className="row">
                <div className="col">
                  <h1 className="home-info-header">
                    Премиальные сенсорные светильники для кухни
                  </h1>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p className="home-info-subheader">
                    <strong className="home-text-accent">8 лет</strong> оснащаем
                    Ваши кухни нашими светильниками по цене производителя.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col home-info-watch-video-header-container">
                  <p className="home-info-watch-video-header">
                    <strong className="home-text-accent">Посмотрите </strong>
                    видеопрезентацию о наших светильниках!
                  </p>
                </div>
                <div className="col home-info-watch-video-button-container">
                  <div className="home-info-watch-video-button-container-inner">
                    <div
                      className="home-info-watch-video-button-image"
                      onClick={this.toggleVideoModal}
                    >
                      <img
                        className="home-info-watch-video-button-image-icon"
                        src="/icons/2-media-play-symbol-white.svg"
                        alt="Посмотрите видеопрезентацию о наших светильниках!"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <Button className="home-info-constructor-button">
                    Онлайн конструктор
                  </Button>
                </div>
              </div>
            </div>
            <div className="col home-switcher-container">
              <div className="row">
                <div className="col">
                  <div className="home-switcher-header-container">
                    <span className="home-switcher-header">
                      Выберите цвет светильника
                    </span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-auto home-switcher-controls-container">
                  <span
                    className="home-switcher-controls-dot dot-gold"
                    title="Золотой цвет"
                    onClick={this.changeSwitcherImage}
                  ></span>
                  <span
                    className="home-switcher-controls-dot dot-white"
                    title="Белый цвет"
                    onClick={this.changeSwitcherImage}
                  ></span>
                  <span
                    className="home-switcher-controls-dot dot-black"
                    title="Чёрный цвет"
                    onClick={this.changeSwitcherImage}
                  ></span>
                  <span
                    className="home-switcher-controls-dot dot-silver"
                    title="Серебряный цвет"
                    onClick={this.changeSwitcherImage}
                  ></span>
                </div>
              </div>
            </div>
          </div>
          <div className="row home-additional-container">
            <div className="col home-additional-inner-container">
              <img
                src="/icons/1-speed.svg"
                alt=""
                className="home-additional-icon"
              />
              <span className="home-additional-text">
                УСТАНОВКА ПОД РАЗМЕР ВАШЕЙ КУХНИ ЗА 72 ЧАСА;
              </span>
            </div>
            <div className="col home-additional-inner-container">
              <img
                src="/icons/3-policy.svg"
                alt=""
                className="home-additional-icon"
              />
              <span className="home-additional-text">ГАРАНТИЯ 5 ЛЕТ;</span>
            </div>
            <div className="col home-additional-inner-container">
              <img
                src="/icons/4-tap.svg"
                alt=""
                className="home-additional-icon"
                style={{ transform: "rotate(-30deg)" }}
              />
              <span className="home-additional-text">
                БЕСКОНТАКТНОЕ УПРАВЛЕНИЕ СВЕТОМ;
              </span>
            </div>
            <div className="col home-additional-inner-container">
              <img
                src="/icons/5-bright-stars.svg"
                alt=""
                className="home-additional-icon"
              />
              <span className="home-additional-text">ЭКСКЛЮЗИВНОСТЬ.</span>
            </div>
          </div>
        </div>
        <style jsx>{`
          :global(.video-modal-container) {
            border-radius: 0px;
            border-width: 0px;
            overflow: hidden;
            z-index: 1;
            width: 100%;
            height: 0;
            padding-bottom: 56.25%;
          }
          :global(.video-modal-iframe) {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }
          .home-container {
            padding-left: var(--main-column-padding);
            padding-bottom: 80px;
          }
          .home-info-container {
            padding-top: 60px;
          }
          .home-info-header {
            font-weight: var(--font-weight-extra-bold);
            font-size: 36px;
            color: var(--main-color-black);
            text-transform: uppercase;
          }
          .home-info-subheader {
            font-weight: var(--font-weight-medium);
            font-size: 20px;
            color: var(--main-color-black);
          }
          .home-info-watch-video-header-container {
            padding-top: 10px;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: flex-start;
            align-items: center;
          }
          .home-info-watch-video-header {
            font-weight: var(--font-weight-medium);
            font-size: 18px;
            color: var(--main-color-black);
          }
          .home-info-watch-video-button-container {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: flex-start;
            align-items: center;
          }
          .home-info-watch-video-button-container-inner {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: center;
            align-items: center;
            background-color: var(--main-color-yellow);
            width: 86px;
            height: 86px;
            border-radius: 50%;
            border: 12px solid #fff9f5;
            animation: pulse 2s infinite;
          }
          @keyframes pulse {
            0% {
              background-color: var(--main-color-white);
              border-color: var(--main-color-white);
            }
            25% {
              background-color: #fff9f5;
              border-color: #fff9f5;
            }
            50% {
              background-color: var(--main-color-yellow);
              border-color: #fff9f5;
            }
            75% {
              background-color: var(--main-color-yellow);
              border-color: var(--main-color-white);
            }
            100% {
              background-color: var(--main-color-white);
              border-color: var(--main-color-white);
            }
          }
          .home-info-watch-video-button-image {
            height: 41px;
            width: 41px;
            background: url("/icons/home-video-button.png");
            background-repeat: no-repeat;
            background-position: -10px 0px;
            background-size: 82px;
            border-radius: 50%;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: center;
            align-items: center;
            cursor: pointer;
          }
          .home-info-watch-video-button-image-icon {
            padding-left: 5px;
            height: 14px;
          }
          :global(.home-info-constructor-button) {
            width: 254px;
            height: 55px;
            color: var(--main-color-black);
            font-weight: var(--font-weight-bold);
            background-color: var(--main-color-yellow);
            text-transform: uppercase;
            border: 0px solid transparent;
          }
          :global(.home-info-constructor-button:focus) {
            color: var(--main-color-black) !important;
            background-color: var(--main-color-yellow) !important;
            outline: none !important;
            box-shadow: 0 0 0 0 transparent;
          }
          :global(.home-info-constructor-button:hover) {
            color: var(--main-color-black);
            background-color: var(--main-color-yellow-hover) !important;
          }
          :global(.home-info-constructor-button:active) {
            color: var(--main-color-black) !important;
            background-color: var(--main-color-yellow) !important;
            box-shadow: 0 0 0 0 transparent !important;
          }
          .home-text-accent {
            color: var(--main-color-purple);
          }
          .home-switcher-container {
            padding-top: 30px;
            height: 530px;
            background: url("/images/home-boy.png"),
              ${`url("${this.state.switcherImage}")`},
              url("/images/home-shape.svg");
            background-repeat: no-repeat;
            background-size: 252px, 1100px, 950px;
            background-position: 100px 175px, 350px 80px, 0px -100px;
          }
          .home-switcher-header-container {
            display: block;
            padding-left: 145px;
            padding-bottom: 6px;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: flex-start;
          }
          .home-switcher-header {
            width: 120px;
            font-weight: var(--font-weight-medium);
            font-size: 14px;
            color: #777c85;
            text-align: center;
          }
          .home-switcher-controls-container {
            background-color: var(--main-color-white);
            height: 40px;
            min-width: 300px;
            max-width: 300px;
            padding-left: 160px;
            padding-right: 20px;
            border-top-right-radius: 50px;
            border-bottom-right-radius: 50px;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-between;
            align-items: center;
          }
          .home-switcher-controls-dot {
            height: 12px;
            width: 12px;
            border-radius: 50%;
            cursor: pointer;
          }
          .dot-gold {
            background-color: #d9c79c;
          }
          .dot-white {
            background-color: #ffffff;
            border: 1px solid #c9c9c9;
          }
          .dot-black {
            background-color: #595959;
          }
          .dot-silver {
            background-color: #c9c9c9;
          }
          .home-additional-container {
            padding-left: 15px;
            padding-right: calc(var(--main-column-padding) + 15px);
          }
          .home-additional-inner-container {
            margin: 0;
            width: 302px;
            height: 97px;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: center;
            align-items: center;
            border: 1px solid #edf1f2;
            border-right-width: 0px;
          }
          .home-additional-inner-container:nth-last-child(1) {
            border: 1px solid #edf1f2;
            border-right-width: 1px;
          }
          .home-additional-icon {
            width: 40px;
            height: 40px;
          }
          .home-additional-text {
            font-size: 16px;
            font-weight: var(--font-weight-bold);
            padding-left: 20px;
          }
        `}</style>
      </section>
    );
  }
}
