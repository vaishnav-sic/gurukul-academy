import { useState ,react} from "react";
import auth from "../firebaseConfig";
import { useRouter } from "next/router";
import { signInWithEmailAndPassword } from "firebase/auth";
// import "../public/assets/css/style.css";

const AdminLogin = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User signed in:", user);
      // Redirect or perform other actions upon successful login
      router.push("/admin");
    } catch (error) {
      // Handle authentication errors
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("wrong password or id ");
      console.error("Authentication error:", errorCode, errorMessage);
    }
  };

  return (
    <div className="login">
    <div className="box-form">
      <div className="left">
        <div className="overlay">
          <h1>Admin Login</h1>
          <p>
            SWASAMVEDYA INTELLIGENCE CENTRE
          </p>
        </div>
      </div>

      <div className="right">
        <h5>Login</h5>
        
        <div className="inputs">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
    </div>
  );
};

export default AdminLogin;
