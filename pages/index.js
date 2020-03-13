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
    <style jsx>{`
      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
);

export default Index;
