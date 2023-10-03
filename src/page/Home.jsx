import { Container, Col, Row } from "react-bootstrap";
import { PasswordForm } from "../PasswordForm";
import { TimeResult } from "../TimeResult";
import { useState } from "react";
import { ConditionTable } from "../ConditionTable";
import { passwordBruteforcetime } from "../function";
import { calculateTime } from "../calculate";
import { PasswordStrengthIndicator } from "../PasswordStrengthIndicator";

export function Home() {
  const [password, setPassword] = useState("");

  // function getPassword(){
  //   setPassword()
  // }
  const setPasswordFromChild = (pass) => {
    setPassword(pass);
  };

  const result = passwordBruteforcetime(password);
  console.log(result);

  const time = calculateTime(result);

  console.log(password);
  return (
    <>
      <Container className="homeCon px-4" fluid>
        <Row className="d-flex  d-flex align-items-end justify-content-center h-50   mx-auto">
          <Col md={8}>
            <PasswordForm setPasswordFromChild={setPasswordFromChild} />
            <PasswordStrengthIndicator password={password} />
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="text-center timeResult mt-4">
              <h6 className="text-secondary">This password take</h6>
              <h1 className="text-primary">{time}</h1>
              <h6 className="text-secondary">to bruteforce.</h6>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
