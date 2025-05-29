import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.js";
import { useState } from "react";

function Register({ onSuccess, onError }) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const { email, password } = e.target.elements;

    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        const userEmail = userCredential.user.email;
        onSuccess(userEmail);
        setLoading(false);
      })
      .catch((err) => {
        onError(err.message);
        setLoading(false);
      });
  };

  return (
    <>
      <h2 style={styles.title}>Registro</h2>
      <form style={styles.form} onSubmit={handleSubmit}>
        <label style={styles.label}>
          Email:
          <input
            style={styles.input}
            type="email"
            placeholder="ejemplo@correo.com"
            name="email"
            required
          />
        </label>
        <label style={styles.label}>
          Contraseña:
          <input
            style={styles.input}
            type="password"
            placeholder="Tu contraseña segura"
            name="password"
            required
            minLength={6}
          />
        </label>
        <button style={styles.button} type="submit" disabled={loading}>
          {loading ? "Registrando..." : "Registrar"}
        </button>
      </form>
    </>
  );
}

const styles = {
  title: {
    textAlign: "center",
    marginBottom: "15px",
    color: "#0077cc",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: "15px",
    fontWeight: "600",
    color: "#333",
  },
  input: {
    marginTop: "5px",
    padding: "8px 10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    width: "100%",
  },
  button: {
    padding: "10px",
    backgroundColor: "#0077cc",
    border: "none",
    color: "white",
    fontWeight: "700",
    fontSize: "16px",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};

export default Register;

