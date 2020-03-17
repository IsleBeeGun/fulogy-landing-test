import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardText, CardHeader, CardBody, Button } from "reactstrap";
import Header from "../components/Header/Header";
import Home from "../components/Home/Home";
import Price from "../components/Price/Price";
import Mounted from "../components/Mounted/Mounted";
import InfoSlider from "../components/InfoSlider/InfoSlider";
import Constructor from "../components/Constructor/Constructor";
import Stages from "../components/Stages/Stages";
import About from "../components/About/About";
import Reviews from "../components/Reviews/Reviews";
import Footer from "../components/Footer/Footer";

const Index = () => (
  <div className="container-fluid">
    <Header />
    <main>
      <Home />
      <Price />
      <Mounted />
      <InfoSlider />
      <Constructor />
      <Stages />
      <About />
      <Reviews />
    </main>
    <Footer />
    {/* <Card>
      <CardBody>
        <CardHeader>Hello Next.js!</CardHeader>
        <br />
        <CardText>Bootstrap 4 power!</CardText>
        <Button color="danger">OK</Button>
      </CardBody>
    </Card> */}
    <style jsx global>{`
      @font-face {
        font-family: "Muller";
        src: url("/fonts/MullerMedium.otf");
        font-weight: 500;
      }
      @font-face {
        font-family: "Muller";
        src: url("/fonts/MullerBold.otf");
        font-weight: 700;
      }
      @font-face {
        font-family: "Muller";
        src: url("/fonts/MullerExtraBold.otf");
        font-weight: 900;
      }
      * {
        box-sizing: border-box;
        font-family: "Muller";
      }
      *:focus {
        outline-width: 0px !important;
      }
      :root {
        --main-column-padding: 30px;
        --font-weight-medium: 500;
        --font-weight-bold: 700;
        --font-weight-extra-bold: 900;
        --main-color-white: #ffffff;
        --main-color-black: #1a1a1a;
        --main-color-purple: #5e50c2;
        --main-color-yellow: #ffcf0d;
        --main-color-yellow-hover: #ffe013;
        --main-color-light-grey: #b3b3b3;
      }
    `}</style>
  </div>
);

export default Index;
