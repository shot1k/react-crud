import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PersonTable from "./personTable";
import Filter from "./filter";
import { useState } from "react";

function Person() {
  const [personsAray, setPersonsAray] = useState([]);

  function seach(name, lastName, age, sex) {

    let p = personsAray;
    console.log(1111111111, name, lastName, age, sex)
    if(name){
      p= personsAray.filter(item => item.name.includes(name));
    }
    if(lastName){
      p= personsAray.filter(item => item.lastname.includes(lastName));
    }
    if(age){
      console.log('age')
      p= personsAray.filter(item => item.age == age);
    }
    if(sex!='0'){
      console.log('sex')
      p= personsAray.filter(item => item.sex == sex);
    }
    setPersonsAray(p);
    // setPersonsAray(personsAray.filter(item => ((item.name.includes(name)) && (item.lastname.includes(lastName))
    // && (item.age == age || item.age != "") )))
  }


  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Row>
            <Col></Col>
            <Col xs={10}>
              <Filter serch={seach} />
              <PersonTable personsAray={personsAray} setPersonsAray={setPersonsAray}/>
            </Col>
            <Col></Col>
          </Row>
        </div>
      </header>
    </div>
  );
}

export default Person;
