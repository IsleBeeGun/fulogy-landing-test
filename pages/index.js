import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardText, CardHeader, CardBody, Button } from "reactstrap";

const Home = () => (
  <div className="container">
    <Card>
      <CardBody>
        <CardHeader>Hello Next.js!</CardHeader>
        <br />
        <CardText>Bootstrap 4 power!</CardText>
        <Button color="danger">OK</Button>
      </CardBody>
    </Card>

    <style jsx>{`
      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
);

export default Home;
