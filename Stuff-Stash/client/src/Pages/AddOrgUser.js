import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function AddOrgUser() {
  const [orgID, setOrgID] = useState("");
  const [orgName, setOrgName] = useState("");

  function validateForm() {
    return orgID.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="addOrgUser container">
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <img
            src="icons8-conference-100.png"
            class="img-thumbnail"
            alt="Org Users"
          />
          <Form onSubmit={handleSubmit}>
            <Form.Group size="sm" controlId="orgName orgID">
              <Form.Label>Organization Name:</Form.Label>
              <Form.Control
                autoFocus
                type="text"
                value={orgName}
                onChange={(e) => setOrgName(e.target.value)}
              />
            </Form.Group>

            <Form.Label>Organization ID:</Form.Label>
            <Form.Control
              autoFocus
              type="text"
              value={orgID}
              onChange={(e) => setOrgID(e.target.value)}
            />
            <Button
              className="m-3"
              block
              size="sm"
              type="submit"
              disabled={!validateForm()}
            >
              Submit
            </Button>
          </Form>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}
