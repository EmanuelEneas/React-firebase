
import { useState } from "react";
import Register from "./components/Register";
import Signup from "./components/Signup";

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const handleAuthSuccess = (email) => {
    setUser(email);
    setError(null);
  };

  const handleAuthError = (error) => {
    setError(error);
  };

  return (
    <div style={styles.appContainer}>
      <header style={styles.header}>
        <h1 style={styles.title}>🔥 Firebase Authentication 🔥</h1>
        <p style={user ? styles.userText : styles.noUserText}>
          {user ? `Usuario: ${user}` : "No hay usuario autenticado"}
        </p>
        {error && <p style={styles.errorText}>{error}</p>}
      </header>

      <main style={styles.formsContainer}>
        <section style={styles.formBox}>
          <Register onSuccess={handleAuthSuccess} onError={handleAuthError} />
        </section>
        <section style={styles.formBox}>
          <Signup onSuccess={handleAuthSuccess} onError={handleAuthError} />
        </section>
      </main>

      <footer style={styles.footer}>
        <small>© 2025 Tu Nombre - Proyecto React + Firebase</small>
      </footer>
    </div>
  );
}

const styles = {
  appContainer: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    maxWidth: "900px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#f5f7fa",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    textAlign: "center",
    marginBottom: "30px",
    padding: "10px",
    backgroundColor: "#0077cc",
    color: "white",
    borderRadius: "8px",
  },
  title: {
    margin: "0 0 10px 0",
  },
  userText: {
    fontSize: "20px",
    fontWeight: "600",
  },
  noUserText: {
    fontSize: "20px",
    fontWeight: "400",
    fontStyle: "italic",
    color: "#ddd",
  },
  errorText: {
    color: "#ff4d4d",
    fontWeight: "600",
    marginTop: "10px",
  },
  formsContainer: {
    display: "flex",
    justifyContent: "space-around",
    gap: "20px",
    flexWrap: "wrap",
  },
  formBox: {
    flex: "1 1 400px",
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "25px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  footer: {
    marginTop: "auto",
    textAlign: "center",
    padding: "15px 0",
    fontSize: "14px",
    color: "#666",
  },
};

export default App;
