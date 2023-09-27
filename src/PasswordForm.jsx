import { Form, Button, Row } from "react-bootstrap";

export function PasswordForm({ setPasswordFromChild }) {

  //const [selectedValue, setSelectedValue] = useState("");
  //setPassword ทุกครั้งๆที่คำข้างในเปลี่ยนละส่งกลับไปให้ Parent
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setPasswordFromChild(event.target.value);
      event.preventDefault()

    }
  };
  return (
    <Form>
      <Form.Group className="mb-3">
        <h2>
          <p className="text-center fw-bold"> How long Hacker cracked your password?</p>
        </h2>
        <Form.Control
          type="text"
          placeholder="Enter the password"
          onKeyDown={handleKeyDown}
          className="shadow-sm p-3 mb-5 bg-white rounded"
        />
      </Form.Group>
<<<<<<< Updated upstream
    </Form>
  );
}
=======

      
    </Form>
  );
}

/*
<Row className=" gap-4 justify-content-center h-75 w-100">
        <Form.Select 
          className="col selForm col-md-6  d-flex align-items-center"
          onChange={(e) => setPasswordFromChild(e.target.value)} // Capture the selected value
        >
          <option>password cracking speed</option>
          <option value="1">1 million password/second</option>
          <option value="2">10 million password/second</option>
          <option value="3">100 million password/second</option>
          <option value="4">1 billion password/second</option>
          <option value="5">10 billion password/second</option>
        </Form.Select>
        
        <Button 
          className="col calBtn col-md-6 text-white"
          onClick={() => {
          // Pass the selected value to a function or another file
          setPasswordFromChild(selectedValue);
          }}
        >
          <h6>Calculate</h6>
        </Button>
        
      </Row>
*/
>>>>>>> Stashed changes
