import {Alert, Button, Col, Form, Row, Stack} from "react-bootstrap";
import {useContext} from "react";
import {AuthContext} from "../context/AuthContext.jsx";

const Login = () => {
    const {isLoginLoading, loginInfo, updateLoginInfo, loginUser, loginError} = useContext(AuthContext);

    return (
        <>
            <Form onSubmit={loginUser}>
                <Row style={{
                    height: "100vh",
                    justifyContent: "center",
                    paddingTop: "20px"
                }}>
                    <Col xs={6}>
                        <Stack gap={3}>
                            <h2>Login</h2>
                            <Form.Control type={"email"} placeholder={"Email"} onChange={(e) => updateLoginInfo({...loginInfo, email: e.target.value})}></Form.Control>
                            <Form.Control type={"password"} placeholder={"Password"} onChange={(e) => updateLoginInfo({...loginInfo, password: e.target.value})}></Form.Control>
                            <Button className={"btn-warning"} variant={"primary"} type={"submit"}>
                                {isLoginLoading ? "Logging you in!" : "Login"}
                            </Button>
                            {loginError?.error && <Alert variant={"danger"}><p>{loginError?.message}</p></Alert>}
                        </Stack>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default Login;