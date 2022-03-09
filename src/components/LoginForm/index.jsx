import { Container, Form, Input, Button } from "./style";
import { useHistory } from "react-router-dom";
function LoginForm() {
  const history = useHistory();
  return (
    <Container>
      <Form>
        <h1>Login</h1>
        <Input placeholder="Email" />
        <Input placeholder="Senha" type="password" />
        <div>
          <Button onClick={() => history.push("/")}>Login</Button>
          <Button onClick={() => history.push("/cart")}>voltar</Button>
        </div>
      </Form>
    </Container>
  );
}

export default LoginForm;
