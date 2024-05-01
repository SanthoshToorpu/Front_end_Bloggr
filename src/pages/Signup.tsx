import Auth from "../components/Auth";
import Quote from "../components/Quote";

const Signin = () => {
  return (
    <div className="flex w-full h-screen flex-col lg:flex-row">
       <>
       <Quote type="signup" />
       </>
      <Auth type="signup" />
    </div>
  );
};

export default Signin;
