import { Col, Container, Row, Button, Form } from "react-bootstrap";
import CustomInput from "../../component/customInput/CustomInput";
import { useState } from "react";
import useForm from "../../component/hooks/useForm";
import { useLocation, useNavigate } from "react-router-dom";
import { loginAdminApi } from "../../features/admin/AdminApi";
import { useDispatch } from "react-redux";
import { fetchAdminAction } from "../../features/admin/AdminAction.js";

const loginInput = [
  {
    label: "Email",
    type: "text",
    name: "email",
    placeholder: "example@gmail.com",
    required: true,
  },
  {
    label: "Password",
    type: "password",
    name: "password",
    placeholder: "*********",
    required: true,
  },
];

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const { form, setForm, handleOnChange } = useForm(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goto = location?.state?.from?.pathname || "admin";

const handleOnSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true);

  if (form.email && form.password) {
    const { admin, message } = await loginAdminApi(form);
  dispatch(fetchAdminAction())
    console.log("Login Response:", admin, message);
    setIsLoading(false);


    if (message === "login successful") {
       
      setForm(initialState);
      navigate(goto); // ✅ Navigate after login
    }
  } else {
    alert("Both input must be provided");
    setIsLoading(false);
  }
};

  return (
    <div className="loginWrapper">
      <Container className="d-flex justify-content-center align-items-center">
        <Row className="loginContent">
          <Col className=" ">
            <p className="text-center">
              “Attendance is the first step toward discipline, and discipline is
              the first step toward success.”
            </p>
            <h2 className="mb-3 text-center">RFID Attendance Login</h2>
            <Form onSubmit={handleOnSubmit}>
              {loginInput.map((input, idx) => (
                <CustomInput onChange={handleOnChange} key={idx} {...input} />
              ))}

              <div className="d-grid mt-4">
                <Button variant="dark" type="submit">
                  Login
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
