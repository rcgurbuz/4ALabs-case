import LoginForm from "../../components/LoginForm";
import Navbar from "../../components/Navbar";

function LoginPage() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <LoginForm />
          </div>
          <div className="col-lg-6 ">
            <img
              className=" w-100 mt-5"
              src="/assets/ValidationScreen.svg"
              alt="4alabs"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
