import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="container">
      <div className="title">
        <label>
          DocuGlasses
        </label>
      </div>
      <div className="Login">
        <form onSubmit={handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
          <div class="FormControl">
           <FormLabel>Email</FormLabel>
          </div>
            <div class="FormControl">
              <FormControl
                autoFocus
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            </div>
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
          <div class="FormControl">
            <FormLabel>Password</FormLabel>
          </div>
            <div class="FormControl">
              <FormControl
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password"
                />
            </div>
          </FormGroup>
          < div class="buttonHolder">
            <Button block bsSize="large" disabled={!validateForm()} type="submit">
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
