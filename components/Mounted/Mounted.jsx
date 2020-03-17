import React from "react";

export default class Mounted extends React.Component {
  render() {
    return (
      <article className="row mounted-container">
        <div className="col">
          <div className="row">
            <div className="col">
              <h2 className="mounted-header">Установленные светильники:</h2>
            </div>
          </div>
          <div className="row">
            <div className="col mounted-card-container">
              <div className="mounted-card">
                <img
                  className="mounted-card-photo"
                  src="/images/mounted-1.jpg"
                  alt=""
                />
                <h3 className="mounted-card-header">
                  Угловой светильник 3,49 метра:
                </h3>
                <p className="mounted-card-text">
                  Длина: 1,2 м. + 1,86 м. + 0,4м;
                </p>
                <p className="mounted-card-text">
                  LED Источник света LUX, дневной;
                </p>
                <p className="mounted-card-text">
                  Встроенный бесконтактный диммер (сенсор);
                </p>
                <p className="mounted-card-text mounted-card-price">
                  Цена: <strong className="text-stress">5016 РУБ.</strong>
                </p>
              </div>
            </div>
            <div className="col mounted-card-container">
              <div className="mounted-card">
                <img
                  className="mounted-card-photo"
                  src="/images/mounted-2.jpg"
                  alt=""
                />
                <h3 className="mounted-card-header">
                  Угловой светильник 3,9 метра:
                </h3>
                <p className="mounted-card-text">
                  Длина: 1,33 м. + 1,57 м. + 0,99м;
                </p>
                <p className="mounted-card-text">
                  LED Источник света LUX, теплый;
                </p>
                <p className="mounted-card-text">
                  Встроенный бесконтактный диммер (сенсор);
                </p>
                <p className="mounted-card-text mounted-card-price">
                  Цена: <strong className="text-stress">7975 РУБ.</strong>
                </p>
              </div>
            </div>
            <div className="col mounted-card-container">
              <div className="mounted-card">
                <img
                  className="mounted-card-photo"
                  src="/images/mounted-3.jpg"
                  alt=""
                />
                <h3 className="mounted-card-header">
                  Угловой светильник 3,47 метра:
                </h3>
                <p className="mounted-card-text">
                  Длина: 1,2 м. + 1,86 м. + 0,4м;
                </p>
                <p className="mounted-card-text">
                  LED Источник света LUX, дневной;
                </p>
                <p className="mounted-card-text">
                  Встроенный бесконтактный диммер (сенсор);
                </p>
                <p className="mounted-card-text mounted-card-price">
                  Цена: <strong className="text-stress">8176 РУБ.</strong>
                </p>
              </div>
            </div>
            <div className="col mounted-card-container">
              <div className="mounted-card">
                <img
                  className="mounted-card-photo"
                  src="/images/mounted-4.jpg"
                  alt=""
                />
                <h3 className="mounted-card-header">
                  Угловой светильник 4,55 метра:
                </h3>
                <p className="mounted-card-text">
                  Длина: 1,2 м. + 1,86 м. + 0,4м;
                </p>
                <p className="mounted-card-text">
                  LED Источник света LUX, дневной;
                </p>
                <p className="mounted-card-text">
                  Встроенный бесконтактный диммер (сенсор);
                </p>
                <p className="mounted-card-text mounted-card-price">
                  Цена: <strong className="text-stress">12837 РУБ.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          .mounted-container {
            background-color: #f8f7fd;
            min-height: 690px;
            padding: 0 var(--main-column-padding);
            padding-top: 50px;
          }
          .mounted-header {
            font-size: 36px;
            font-weight: var(--font-weight-extra-bold);
            text-transform: uppercase;
          }
          .mounted-card-container {
            margin-top: 40px;
          }
          .mounted-card {
            min-height: 505px;
            width: 100%;
            border: 1px solid #efeef4;
            background-color: var(--main-color-white);
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: flex-start;
            align-items: baseline;
            box-shadow: 0px 0px 0px 0px #e3d1ff;
            transition: box-shadow 0.2s ease-in-out;
          }
          .mounted-card:hover {
            box-shadow: 0px 10px 25px 0px #e3d1ff;
          }
          .mounted-card-photo {
            width: 100%;
            padding: 20px;
          }
          .mounted-card-header {
            width: 100%;
            padding: 16px 45px 16px 20px;
            font-size: 18px;
            font-weight: var(--font-weight-bold);
            text-transform: uppercase;
          }
          .mounted-card-text {
            font-size: 18px;
            width: 100%;
            padding: 0px 20px;
          }
          .mounted-card-price {
            align-self: flex-end;
          }
          .text-stress {
            font-size: 20px;
            font-weight: var(--font-weight-bold);
            color: var(--main-color-purple);
          }
        `}</style>
      </article>
    );
  }
}
