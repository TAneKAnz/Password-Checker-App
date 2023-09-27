import { Row, Table, Col } from "react-bootstrap";

export function ConditionTable() {
  return (
    <Row className=" w-100 mx-auto">
      <Col md={6} >
        <div className="border border-dark p-0 ">
        <Table  borderless hover className="p-3 ">
          <thead  className="table-success">
            <tr>
              <th>Adding Conditions</th>
              <th>Counts</th>
              <th>Scores</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
              <td>12</td>
              <td>+23</td>
            </tr>
            <tr>
              <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
              <td>5</td>
              <td>+12</td>
            </tr>
            <tr>
              <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
              <td>7</td>
              <td>+9</td>
            </tr>
            <tr>
              <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
              <td>9</td>
              <td>+16</td>
            </tr>
            <tr>
              <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
              <td>3</td>
              <td>+9</td>
            </tr>
            <tr>
              <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
              <td>8</td>
              <td>+18</td>
            </tr>
            <tr>
              <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
              <td>2</td>
              <td>+5</td>
            </tr>
          </tbody>
        </Table>
        </div>
      </Col>
      <Col md={6}  >
      <div className="border border-dark p-0 ">
      <Table  borderless hover className="p-3">
          <thead  className="table-danger ">
            <tr>
              <th>Adding Conditions</th>
              <th>Counts</th>
              <th>Scores</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
              <td>12</td>
              <td>-23</td>
            </tr>
            <tr>
              <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
              <td>5</td>
              <td>-12</td>
            </tr>
            <tr>
              <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
              <td>7</td>
              <td>-9</td>
            </tr>
            <tr>
              <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
              <td>9</td>
              <td>-16</td>
            </tr>
            <tr>
              <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
              <td>3</td>
              <td>-9</td>
            </tr>
            <tr>
              <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
              <td>8</td>
              <td>-18</td>
            </tr>
            <tr>
              <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
              <td>2</td>
              <td>-5</td>
            </tr>
          </tbody>
        </Table>
        </div>
      </Col>
    </Row>
  );
}
