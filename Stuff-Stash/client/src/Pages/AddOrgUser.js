import React, { useState } from "react";

import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";

export default function AddOrgUser() {

  const [orgID, setOrgID] = useState("");

  function validateForm() {

    return orgID.length > 0 ;

  }

  function handleSubmit(event) {

    event.preventDefault();

  }

  return (

    <div className="addOrgUser">

      <Form onSubmit={handleSubmit}>

        <Form.Group size="lg" controlId="orgID">

          <Form.Label>Organization ID</Form.Label>

          <Form.Control

            autoFocus

            type="text"

            value={orgID}

            onChange={(e) => setOrgID(e.target.value)}

          />

        </Form.Group>       

        <Button block size="lg" type="submit" disabled={!validateForm()}>

          Submit

        </Button>

      </Form>

    </div>

  );

}