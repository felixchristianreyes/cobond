import React from "react";
import Form from "react-bootstrap/Form";

function Checkbox() {
  const type = 'checkbox';

  return (
    <div className="h-25">
      
        <div key={`inline-${type}`} className="mx-3">
          <Form.Check
            inline
            label="Clean"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="Bearable"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            label="Dirty"
            name="group1"
            type={type}
            id={`inline-${type}-3`}
          />
        </div>
    
    </div>
  );
}

export default Checkbox;
