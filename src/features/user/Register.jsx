import { Form, Link } from "react-router-dom";
import styles from "./Login.module.css";
function Register() {
  return (
    <div>
    <p className={styles.header}>Green School
  
    </p>
    <div className={styles.subtitle}>Welcome to the gratest school</div>
    <Form className={styles.form}>
      <div className={styles.registerTitle}>Sing Up</div>
      <div className={styles.registerSubtitle}>Quick and easy</div>
      <label>Username</label>
      <input placeholder=""></input>
      <label>Email</label>
      <input placeholder=""></input>

      <label>Password</label>
      <input placeholder=""></input>
      <button>Register</button>
      <label>
        {`have an account alredy?`}
        <Link to="/login">Login</Link>
      </label>
    </Form>
    </div>
  );
}

export default Register;
