import Table from "react-bootstrap/Table";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";

function PersonTable({ personsAray, setPersonsAray }) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [userId, setUserId] = useState();
  const [sex, setSex] = useState(null);

  function openDialog() {
    setIsEdit(false);
    setShow(true);
  }
  function closeDialog() {
    setShow(false);
  }

  function savaDialog() {
    setShow(false);

    if (!isEdit) {
      let c = [
        ...personsAray,
        {
          id: personsAray.length + 1,
          name: name,
          lastname: lastname,
          age: age,
          sex: sex
        },
      ];
      setPersonsAray(c);
      console.log('personsAray', c)
      setIsEdit(false);
    } else {
      let newObj = {
        id: userId,
        name: name,
        lastname: lastname,
        age: age,
        sex: sex
      };
      const updatedTodo = personsAray.map((item) =>
        item.id === userId
          ? {
              ...item,
              ...newObj,
            }
          : item
      );

      setPersonsAray(updatedTodo);
    }

    setName("");
    setLastname("");
    setAge("");
  }

  function edit(user) {
    setIsEdit(true);
    setShow(true);
    setName(user.name);
    setLastname(user.lastname);
    setAge(user.age);
    setSex(user.sex)
    console.log("editi", user.sex);
    setUserId(user.id);
  }

  function delete1(user) {
    let x = personsAray.filter((item) => item.id != user.id);
    setPersonsAray(x);
  }

  const renderTable = () => {
    return personsAray.map((user) => {
      return (
        <tr>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.lastname}</td>
          <td>{user.age}</td>
          <td>{user.sex == 1 ? "მამრობითი": "მდედრობითი"}</td>
          <td>
            <button className="btn btn-info" onClick={() => edit(user)}>
              Edit
            </button>
          </td>
          <td>
            <button className="btn btn-danger" onClick={() => delete1(user)}>
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="App">
      <Button variant="primary" onClick={openDialog}>
        დამატება
      </Button>

      <Modal show={show}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>სახელი</Form.Label>
              <Form.Control
                type="email"
                placeholder="შეიყვანეთ სახელი"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>გვარი</Form.Label>
              <Form.Control
                placeholder="შეიყვანეთ გვარი"
                value={lastname}
                onChange={(e) => {
                  setLastname(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>ასაკი</Form.Label>
              <Form.Control
                placeholder="შეიყვანეთ ასაკი"
                value={age}
                onChange={(e) => {
                  setAge(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label as="legend" column >
               <p inline>აირჩიეთ სქესი</p>
              </Form.Label>
              <Col sm={10}>
                <Form.Check
                  type="radio"
                  label="მამრობითი"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                  value={sex}
                  checked={sex==1? true: false}
                  onChange={(e) => {
                    setSex(1);
                  }}
                />
                <Form.Check
                  type="radio"
                  label="მდედრობითი"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                  checked={sex==2? true: false}
                  onChange={(e) => {
                    setSex(2);
                  }}
                />
              </Col>
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeDialog}>
            დახურვა
          </Button>
          <Button variant="primary" onClick={savaDialog}>
            {!isEdit ? "დამატება" : "შენახვა"}
          </Button>
        </Modal.Footer>
      </Modal>
      <br />
      <br />
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>სახელი</th>
            <th>გვარი</th>
            <th>ასაკი</th>
            <th>სქესი</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </Table>
    </div>
  );
}

export default PersonTable;
