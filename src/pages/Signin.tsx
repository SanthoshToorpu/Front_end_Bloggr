import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Auth from "../components/Auth";
import Quote from "../components/Quote";

const Signin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      navigate("/blogs");
    }
  }, [navigate]);

  return (
    <div className="flex w-full h-screen flex-col lg:flex-row">
      <>
        <Quote type="signin" />
      </>
      <Auth type="signin" />
    </div>
  );
};

export default Signin;
