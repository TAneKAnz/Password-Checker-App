import { Col } from "react-bootstrap";

export function MemberBlock({ name, studentID, imgSrc }) {
  return (
    <Col md={6} className="memberBlock rounded-pill d-flex align-items-center mx-3 my-3 bg-secondary">
      <div className="square-image p-1">
        <img src={imgSrc} alt={name} className="memberpic rounded-circle" />
      </div>
      <h5 className="text-primary d-inline fw-bold px-3">{studentID}</h5>
      <h5 className="text-primary d-inline fw-bold px-3">{name}</h5>
    </Col>
  );
}
