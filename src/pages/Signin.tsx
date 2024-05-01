import Auth from "../components/Auth";
import Quote from "../components/Quote";

const Signin = () => {
  return (
    <div className="flex w-full h-screen flex-col lg:flex-row">
        < >
            <Quote type="signin"/>
        </>
        <Auth type="signin" />
    </div>
  );
};

export default Signin;
