import { Container, Col, Row } from "react-bootstrap";
import { PasswordForm } from "../PasswordForm";
import { TimeResult } from "../TimeResult";
import { useState } from "react";
import { ConditionTable } from "../ConditionTable";

export function Home() {
  const [password, setPassword] = useState("");

  // function getPassword(){
  //   setPassword()
  // }
  const setPasswordFromChild = (pass) => {
    setPassword(pass);
  };
  console.log(password);
  return (
    <>
      <Container className="homeCon px-4" fluid>
        <Row className="d-flex  d-flex align-items-end justify-content-center h-50   mx-auto">
          <Col md={8}>
            <PasswordForm setPasswordFromChild={setPasswordFromChild} />
          </Col>
        </Row>
        <Row>
          <Col>
            <TimeResult />
          </Col>
        </Row>
        
      </Container>
    </>
  );
}
