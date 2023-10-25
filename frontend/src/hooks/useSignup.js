import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function useSignup() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSucc, setIsSucc] = useState(null);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const signup = async (signUpData) => {
    setIsSucc(false);
    setIsLoading(true);
    setError(false);

    const res = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(signUpData),
    });

    const data = await res.json();

    if (!res.ok || data.error) {
      setIsLoading(false);
      setIsSucc(false);
      setError(data.error);
    } else if (res.ok) {
      dispatch({ type: "SIGNUP" });
      setIsSucc(true);
      setIsLoading(false);
      setError(false);
      navigate("/");
    }
  };

  return { signup, error, isLoading, isSucc };
}

export default useSignup;
