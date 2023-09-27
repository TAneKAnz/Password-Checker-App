import { Col } from "react-bootstrap";

export function MemberBlock({ name, imgSrc }) {
  return (
    // <div className=" memberBlock col-md-6 rounded-pill d-flex align-items-center mb-3">
    //   <img
    //     src={imgSrc}
    //     className="memberpic d-inline  mw-25 px-3 rounded-circle "
    //   />
    //   <h4 className="text-primary d-inline px-3">{name}</h4>
    // </div>
    <Col md={6} className=" memberBlock rounded-pill d-flex align-items-center mx-3 mb-5">
      <img
        src={imgSrc}
        className="memberpic d-inline  mw-25 px-3 rounded-circle "
      />
      <h4 className="text-primary d-inline px-3">{name}</h4>
    </Col>
  );
}
