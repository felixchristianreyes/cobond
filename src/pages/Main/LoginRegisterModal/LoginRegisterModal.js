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
            <div className="form-outline mb-2">
              <input type="email" id="form2Example1" className="form-control" />
              <label className="form-label" htmlFor="form2Example1">
                Email address
              </label>
            </div>

            <div className="form-outline mb-2">
              <input type="password" id="form2Example2" className="form-control" />
              <label className="form-label" htmlFor="form2Example2">
                Password
              </label>
            </div>

            <div className="row mb-4">
              <div className="col d-flex justify-content-center">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="form2Example31"
                  />
                  <label className="form-check-label" htmlFor="form2Example31">
                    {" "}
                    Remember me{" "}
                  </label>
                </div>
              </div>

              <div className="col">
                <a href="#!">Forgot password?</a>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <button type="button" className="btn btn-primary mb-4">
                Sign in
              </button>
            </div>
            <div className="text-center">
              <p>
                Not a member? <a href="register">Register</a>
              </p>
              <p>or sign up with:</p>
              <button type="button" className="btn btn-link btn-floating mx-1">
                <BsFacebook />
              </button>

              <button type="button" className="btn btn-link btn-floating mx-1">
                <BsGoogle />
              </button>

              <button type="button" className="btn btn-link btn-floating mx-1">
                <BsTwitter />
              </button>

              <button type="button" className="btn btn-link btn-floating mx-1">
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
