import { Form, Link } from "react-router-dom";
import styles from "./Login.module.css";
function Register() {
  return (
    <Form className={styles.form}>
      <div className={styles.headerTitle}>Register</div>
      <label>Username</label>
      <input placeholder="username"></input>
      <label>Email</label>
      <input placeholder="email"></input>

      <label>Password</label>
      <input placeholder="password"></input>
      <button>Register</button>
      <label>
        {`have an account alredy?`}
        <Link to="/login">Login</Link>
      </label>
    </Form>
  );
}

export default Register;
