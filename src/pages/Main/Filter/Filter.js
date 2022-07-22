import React from "react";
import "./Filter.css";
import { Container, Card, Button, Form } from "react-bootstrap";
import StarRating from "./StarRating/StarRating";

const Filter = () => (
  <Form>
    <Container className="filterContainer mb-5">
      <h3 className="text-center border-bottom mb-5">Sort By</h3>
      <Card className="filterCard">
        <Container className="text-center p-2">
          <p className="p-0 m-0 fs-4">Ratings</p> <StarRating />
        </Container>
      </Card>
      <Card className="filterCard">
        <Container className="text-center p-2">
          <p className="p-0 mb-3 fs-4">Cleanliness</p> <StarRating />
        </Container>
      </Card>
      <div className="d-flex justify-content-center mt-3 pb-3 ">
        <Button variant="outline-dark">Search</Button>
      </div>
    </Container>
  </Form>
);

Filter.propTypes = {};

Filter.defaultProps = {};

export default Filter;
