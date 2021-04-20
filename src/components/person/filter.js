import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Form from "react-bootstrap/Form";
import { useState } from "react";

function Filter({ serch }) {
  const [filterName, setFilterName] = useState("");
  const [filterLastName, setFilterLastName] = useState("");
  const [filterAge, setFilterAge] = useState("");
  const [filterSex, setFilterSex] = useState('0');


  function seach() {
    console.log('filterSex', filterSex)
    serch(filterName, filterLastName, filterAge, filterSex);
  }
  return (
    <div className="App">
      <header className="App-header">
        <Form>
          <Row>
            <Col>
              <Form.Control
                placeholder="სახელი"
                onChange={(e) => setFilterName(e.target.value)}
              />
              <br />
            </Col>
            <Col>
              <Form.Control
                placeholder="გვარი"
                onChange={(e) => setFilterLastName(e.target.value)}
              />
            </Col>
            <Col>
              <Form.Control
                placeholder="ასაკი"
                onChange={(e) => setFilterAge(e.target.value)}
              />
              <br />
            </Col>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Control as="select" onChange={(e) => setFilterSex(e.target.value)}>
                <option value='0'>აირჩიეთ</option>
                <option value="1">მამრობითი</option>
                <option value="2">მდედრობითი</option>
              </Form.Control>
            </Form.Group>
            <Col>
              <button type="button" className="btn btn-primary" onClick={seach}>
                ძებნა
              </button>
            </Col>
          </Row>
        </Form>
      </header>
    </div>
  );
}

export default Filter;
