import { Form, redirect, useActionData } from "react-router-dom";
import { loginUser } from "../../services/apiServer";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";
function Login() {
  const form = useActionData();
  console.log(form);
  return (
    <div>
    <p className={styles.header}>Green School
  
    </p>
    <div className={styles.subtitle}>Welcome to the gratest school</div>
    <Form method="POST" className={styles.form}>
      <div className={styles.headerTitle}>Login</div>
      <label>Username</label>
      <input placeholder="" type="text" name="username"></input>

      <label>Password</label>
      <input placeholder="" type="password" name="password"></input>
      <button>Login</button>
      <label>
        {`You don't have an account?`}
        <Link to="/register">Register</Link>
      </label>
    </Form>
    </div>
  );
}

export async function action({ request }) {
  try {
    const formData = await request.formData();
    const user = Object.fromEntries(formData);
    console.log(user);
    if (user.username.length === 0) {
      throw new Error("not gud");
    }
    // const user = await loginUser(user);
    if (!user) throw new Error("Invalid name");
    return redirect("/");
  } catch (err) {
    console.log(err);
    return redirect("/login");
  }
}

export default Login;
