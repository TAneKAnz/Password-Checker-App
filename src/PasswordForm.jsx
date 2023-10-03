import { Form, Button, Row } from "react-bootstrap";
import "./App.css";

export function PasswordForm({ setPasswordFromChild }) {
  //setPassword ทุกครั้งๆที่คำข้างในเปลี่ยนละส่งกลับไปให้ Parent
  /*
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setPasswordFromChild(event.target.value);
      event.preventDefault()

    }
  };*/
  return (
    <Form>
      <Form.Group className="mb-3">
        <h1>
          <p className="text-center fw-bold"> How long Hacker cracked your password?</p>
        </h1>
        <Form.Control
          type="Password"
          placeholder="Enter the password"
          //onKeyDown={handleKeyDown}
          onChange={(e) => setPasswordFromChild(e.target.value)}
          className="PaswordForm shadow-sm p-4 mt-5 ml-3 bg-white"
          style={{ fontSize: '2rem' }}
        />
      </Form.Group>
    </Form>
  );
}
