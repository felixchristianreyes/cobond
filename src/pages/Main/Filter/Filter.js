import React from "react";
import "./Filter.css";
import { Container, Card, Button, Form } from "react-bootstrap";
import StarRating from "./StarRating/StarRating";
import Checkbox from "./Checkbox/Checkbox";

const Filter = () => (
  <Container className="filterContainer mb-5">
    <Form>
      <h2>Filter By:</h2>
      <Card className="filterCard">
        <Container className="d-flex p-2">
          <p className="p-0 m-0">Ratings:</p> <StarRating />
        </Container>
      </Card>
      <Card className="filterCard">
        <Container className="d-flex p-2">
          <p className="p-0 m-0">Cleanliness:</p> <Checkbox />
        </Container>
      </Card>
      <Button size="lg" >Search</Button>
    </Form>
  </Container>
);

Filter.propTypes = {};

Filter.defaultProps = {};

export default Filter;
