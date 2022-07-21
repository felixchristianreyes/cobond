import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./LoginRegisterModal.css";
import { BsFacebook, BsGoogle, BsTwitter, BsGithub } from "react-icons/bs";
const LoginRegister = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-info" onClick={handleShow}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign-in or Sign-up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div class="form-outline mb-2">
              <input type="email" id="form2Example1" class="form-control" />
              <label class="form-label" for="form2Example1">
                Email address
              </label>
            </div>

            <div class="form-outline mb-2">
              <input type="password" id="form2Example2" class="form-control" />
              <label class="form-label" for="form2Example2">
                Password
              </label>
            </div>

            <div class="row mb-4">
              <div class="col d-flex justify-content-center">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="form2Example31"
                  />
                  <label class="form-check-label" for="form2Example31">
                    {" "}
                    Remember me{" "}
                  </label>
                </div>
              </div>

              <div class="col">
                <a href="#!">Forgot password?</a>
              </div>
            </div>
            <div class="d-flex justify-content-center">
              <button type="button" class="btn btn-primary mb-4">
                Sign in
              </button>
            </div>
            <div class="text-center">
              <p>
                Not a member? <a href="#!">Register</a>
              </p>
              <p>or sign up with:</p>
              <button type="button" class="btn btn-link btn-floating mx-1">
                <BsFacebook />
              </button>

              <button type="button" class="btn btn-link btn-floating mx-1">
                <BsGoogle />
              </button>

              <button type="button" class="btn btn-link btn-floating mx-1">
                <BsTwitter />
              </button>

              <button type="button" class="btn btn-link btn-floating mx-1">
                <BsGithub />
              </button>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LoginRegister;
