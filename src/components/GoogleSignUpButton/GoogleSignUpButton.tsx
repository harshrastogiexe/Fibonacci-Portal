import "./styles.scss";
import googleLogo from "../../assets/icons/googleLogo.svg";

const GoogleSignUpButton = () => {
  return (
    <div className='google_sign_up'>
      <h3 className='google_sign_up__title'>🎓 Create an account</h3>
      <button className='google_sign_up__button google_sign_up__button-full'>
        <img className='google_sign_up__icon' src={googleLogo} alt='Google Icon' />
        Sign Up With Google
      </button>
    </div>
  );
};

export default GoogleSignUpButton;
