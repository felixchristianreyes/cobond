import React from "react";
import "./Filter.css";
import { Container, Card, Button, Form } from "react-bootstrap";
import StarRating from "./StarRating/StarRating";
import Checkbox from "./Checkbox/Checkbox";

const Filter = () => (
  <Container className="filterContainer mb-5">
    <Form>
      <h3 className="text-center border-bottom">Filter By</h3>
      <Card className="filterCard">
        <Container className="text-center p-2">
          <p className="p-0 m-0">Ratings</p> <StarRating />
        </Container>
      </Card>
      <Card className="filterCard">
        <Container className="text-center p-2">
          <p className="p-0 mb-3">Cleanliness</p> <Checkbox />
        </Container>
      </Card>
      <div className="d-flex justify-content-center mt-3 pb-3 border-bottom">
        <Button variant="outline-dark">Search</Button>
      </div>
    </Form>
  </Container>
);

Filter.propTypes = {};

Filter.defaultProps = {};

export default Filter;
