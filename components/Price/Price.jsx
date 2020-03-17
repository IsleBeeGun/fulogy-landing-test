import React from "react";
import { Modal, ModalHeader, Button } from "reactstrap";

export default class Price extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: "not scanned",
      modal: false,
      nameField: false,
      phoneField: false,
      gdpr: false
    };
    this.toggleFormModal = this.toggleFormModal.bind(this);
    this.checkNameField = this.checkNameField.bind(this);
    this.checkPhoneField = this.checkPhoneField.bind(this);
    this.checkGDPR = this.checkGDPR.bind(this);
  }
  componentDidMount() {
    if (navigator.userAgent.toLowerCase().match(/mobile/i)) {
      this.setState({ isMobile: true });
    } else {
      this.setState({ isMobile: false });
    }
  }
  toggleFormModal() {
    this.state.modal
      ? this.setState({ modal: false })
      : this.setState({ modal: true });
  }
  checkNameField(event) {
    if (event.target.value.length==0) {
      this.setState({nameField: false})
    } else {
      this.setState({nameField: true})
    }
  }
  checkPhoneField(event) {
    if (event.target.value.match(/^[\d)(+-]+$/)) {
      this.setState({phoneField: true})
    } else {
      this.setState({phoneField: false})
    }
  }
  checkGDPR(event) {
    if (!event.target.value) {
      this.setState({gdpr: false})
    } else {
      this.setState({gdpr: true})
    }
  }
  render() {
    return (
      <section className="row price-container">
        <Modal
          size="lg"
          contentClassName="form-modal-container"
          isOpen={this.state.modal}
          toggle={this.toggleFormModal}
          centered={true}
        >
          <div className="form-modal-image-container"></div>
          <div className="form-modal-form-container">
            <ModalHeader toggle={this.toggleFormModal}></ModalHeader>
            <div className="form-modal-form-header-container">
              <h3 className="form-modal-form-header">Чтобы заказать звонок</h3>
              <span className="form-modal-form-subheader">
                впишите своё имя и телефон:
              </span>
            </div>
            <form action="" className="form-modal-form-inner-container">
              <input
                className="form-modal-form-textinput"
                type="text"
                id="name"
                name="name"
                placeholder="Ваше имя:"
                onChange={this.checkNameField}
                required
              />
              <input
                className="form-modal-form-textinput"
                type="tel"
                id="phone"
                name="phone"
                pattern="^[\d)(+-]+$"
                title="Пожалуйста, вводите только цифры и +, -, ()"
                placeholder="Ваш телефон:"
                onChange={this.checkPhoneField}
                required
              ></input>
              <div className="form-modal-form-gdpr-container">
                <input
                  className="form-modal-form-gdpr-radio"
                  type="radio"
                  id="gdpr"
                  name="gdpr"
                  value={true}
                  onChange={this.checkGDPR}
                  required
                ></input>
                <label htmlFor="gdpr">
                  Я принимаю условия
                  <br />
                  <a
                    href=""
                    style={{ color: "#5E50C2", textDecoration: "underline" }}
                  >
                    политики конфеденциальности
                  </a>
                </label>
              </div>
              <Button
                className="form-modal-form-submit"
                type="submit"
                value="Submit"
                disabled={(this.state.nameField&&this.state.phoneField&&this.state.gdpr)?false:true}
              >
                ЗАКАЗАТЬ ЗВОНОК
              </Button>
            </form>
          </div>
        </Modal>
        <div className="col-1"></div>
        <div className="col-3">
          <div className="row">
            <div className="col">
              <h2 className="price-header">Стоимость</h2>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p className="price-subheader">
                Стоимость погонного метра светильника fulogy от <br />
                <strong className="price-text-stress">2000</strong> руб.{" "}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="price-includes-container">
                <p className="price-includes-text">В цену входит:</p>
                <img
                  className="price-includes-icon"
                  src="/icons/7-right-pointing-arrow.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Button
                className="price-call-button"
                onClick={this.toggleFormModal}
              >
                Заказать звонок
              </Button>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p className="price-call-text">
                или звоните по телефону:
                <br />
                <strong className="price-text-stress">
                  <a href="tel:+78005056533" className="price-call-link">
                    +7-(800)-505-65-33
                  </a>
                </strong>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="price-social-container">
                <a
                  className="price-social-link"
                  href="https://api.whatsapp.com/send?phone=+78005056533"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="price-social-link-icon"
                    src="/icons/8-whatsapp.svg"
                    alt="Позвонить WhatsApp"
                  />
                </a>
                <a
                  className="price-social-link"
                  href={
                    this.state.isMobile
                      ? "viber://add?number=78005056533"
                      : "viber://chat?number=+78005056533"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="price-social-link-icon"
                    src="/icons/9-viber.svg"
                    alt="Позвонить Viber"
                  />
                </a>
                <a
                  className="price-social-link"
                  href="https://telegram.im/@islebeegun"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="price-social-link-icon"
                    src="/icons/10-telegram.svg"
                    alt="Чат в Telegram"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-1"
          style={{ borderLeft: "1px solid #5d4eb2" }}
        ></div>
        <div className="col-7 price-info-container">
          <div className="row">
            <div className="col">
              <h3 className="price-info-header">01</h3>
              <p className="price-info-text">
                Блок питания (не свистит, не жужжит);
              </p>
            </div>
            <div className="col">
              <h3 className="price-info-header">02</h3>
              <p className="price-info-text">
                Индивидуальное производство для Вашей кухни;
              </p>
            </div>
            <div className="col">
              <h3 className="price-info-header">03</h3>
              <p className="price-info-text">
                Сенсор управления светом очень удобный, технологичный и
                стильный);
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h3 className="price-info-header">04</h3>
              <p className="price-info-text">Гарантия 5 лет; </p>
            </div>
            <div className="col">
              <h3 className="price-info-header">05</h3>
              <p className="price-info-text">
                Демонтаж старых светильников и монтаж наших;
              </p>
            </div>
            <div className="col">
              <h3 className="price-info-header">06</h3>
              <p className="price-info-text">
                Светодиоды высокой цветопередачи, что делает свет приближенным к
                естественому солнечному цвету.
              </p>
            </div>
          </div>
        </div>
        <style jsx>{`
          :global(.form-modal-container) {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
          }
          :global(.form-modal-image-container) {
            min-width: 315px;
            max-width: 315px;
            min-height: 394px;
            max-height: 394px;
            background: url("/images/form-picture.png");
            background-size: cover;
          }
          :global(.form-modal-form-container) {
            width: calc(100% - 315px);
          }
          :global(.modal-header) {
            border-width: 0px !important;
            padding: 10px;
          }
          :global(.form-modal-form-header-container) {
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            justify-content: center;
            align-items: center;
            border-left: 10px solid var(--main-color-yellow);
            border-right: 10px solid var(--main-color-yellow);
            margin-bottom: 20px;
          }
          :global(.form-modal-form-header) {
            padding: 0px;
            margin: 0px;
            text-transform: uppercase;
            color: var(--main-color-black);
            font-size: 20px;
            font-weight: var(--font-weight-bold);
          }
          :global(.form-modal-form-subheader) {
            padding: 0px;
            margin: 0px;
            color: var(--main-color-black);
            font-size: 18px;
          }
          :global(.form-modal-form-inner-container) {
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            justify-content: flex-start;
            align-items: center;
          }
          :global(.form-modal-form-textinput) {
            margin: 10px;
            background-color: #f1f1f1;
            border: 2px solid #f1f1f1;
            width: 276px;
            height: 46px;
            padding-left: 20px;
          }
          :global(.form-modal-form-textinput:focus:invalid) {
            /* insert your own styles for invalid form input */
            outline: none;
            border-color: #f42d28;
          }
          :global(.form-modal-form-textinput:focus:valid) {
            /* insert your own styles for invalid form input */
            outline: none;
            border-color: #6bae22;
          }
          :global(.form-modal-form-gdpr-container) {
            margin: 10px;
            width: 276px;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            align-items: baseline;
          }
          :global(.form-modal-form-gdpr-radio) {
            border: 0px;
            width: 15px;
            height: 15px;
            margin-right: 15px;
          }
          :global(.form-modal-form-submit) {
            width: 254px;
            height: 55px;
            color: var(--main-color-black);
            font-weight: var(--font-weight-bold);
            background-color: var(--main-color-yellow);
            text-transform: uppercase;
            border: 0px solid transparent;
          }
          :global(.form-modal-form-submit:focus) {
            color: var(--main-color-black) !important;
            background-color: var(--main-color-yellow) !important;
            outline: none !important;
            box-shadow: 0 0 0 0 transparent;
          }
          :global(.form-modal-form-submit:hover) {
            color: var(--main-color-black);
            background-color: var(--main-color-yellow-hover) !important;
          }
          :global(.form-modal-form-submit:active) {
            color: var(--main-color-black) !important;
            background-color: var(--main-color-yellow) !important;
            box-shadow: 0 0 0 0 transparent !important;
          }
          .price-container {
            min-height: 522px;
            background: url("/icons/6-inverted-commas.svg"),
              url("/images/price-bg-2.jpg");
            background-attachment: scroll, fixed;
            background-repeat: no-repeat;
            background-position: calc(var(--main-column-padding) + 15px) 18px,
              top;
            background-size: 190px, 100%;
            padding-left: var(--main-column-padding);
          }
          .price-header {
            padding-top: 70px;
            font-weight: var(--font-weight-extra-bold);
            font-size: 30px;
            color: var(--main-color-white);
            text-transform: uppercase;
          }
          .price-subheader {
            color: var(--main-color-white);
            font-size: 20px;
            line-height: 36px;
          }
          .price-text-stress {
            font-size: 20px;
            color: var(--main-color-yellow);
            font-weight: var(--font-weight-extra-bold);
          }
          .price-includes-container {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: flex-start;
            align-items: center;
          }
          .price-includes-text {
            color: var(--main-color-white);
            font-size: 20px;
            font-weight: var(--font-weight-bold);
            text-transform: uppercase;
            margin: 0;
          }
          .price-includes-icon {
            margin-left: 20px;
            width: 100px;
          }
          :global(.price-call-button) {
            width: 254px;
            height: 55px;
            color: var(--main-color-black);
            font-weight: var(--font-weight-bold);
            background-color: var(--main-color-yellow);
            text-transform: uppercase;
            border: 0px solid transparent;
          }
          :global(.price-call-button:focus) {
            color: var(--main-color-black) !important;
            background-color: var(--main-color-yellow) !important;
            outline: none !important;
            box-shadow: 0 0 0 0 transparent;
          }
          :global(.price-call-button:hover) {
            color: var(--main-color-black);
            background-color: var(--main-color-yellow-hover) !important;
          }
          :global(.price-call-button:active) {
            color: var(--main-color-black) !important;
            background-color: var(--main-color-yellow) !important;
            box-shadow: 0 0 0 0 transparent !important;
          }
          .price-call-text {
            color: var(--main-color-white);
            font-size: 16px;
          }
          .price-call-link {
            text-decoration: none;
            color: var(--main-color-yellow);
          }
          .price-social-container {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: flex-start;
            align-items: center;
          }
          .price-social-link {
            margin-right: 20px;
            cursor: pointer;
          }
          .price-social-link-icon {
            width: 25px;
          }
          .price-info-container {
            padding-top: 70px;
          }
          .price-info-header {
            font-weight: var(--font-weight-bold);
            font-size: 36px;
            color: var(--main-color-white);
            text-transform: uppercase;
          }
          .price-info-text {
            color: var(--main-color-white);
            font-size: 20px;
          }
        `}</style>
      </section>
    );
  }
}
