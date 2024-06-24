import { useLoginWithGoogleMutation } from "../../features/auth/AuthApi";
import google from "../../assets//google.png";
function LoginWithGoogle() {
  const [googleLogin] = useLoginWithGoogleMutation();
  const handleGoogleLogin = () => {
    googleLogin();
  };
  return (
    <button
      type="button"
      className="font-bold text-white  rounded-md  w-full flex  items-center  border border-blue-500 bg-blue-500 hover:bg-blue-600"
      onClick={handleGoogleLogin}
    >
      <figure className="h-full py-2.5   bg-white px-3 rounded-l-md">
        <img src={google} className="w-7 " alt="Google" />
      </figure>
      <span className="block  text-white flex-1 h-full">
        Sign in with Google
      </span>
    </button>
  );
}

export default LoginWithGoogle;
