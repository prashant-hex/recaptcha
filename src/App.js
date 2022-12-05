// import logo from './logo.svg';
import './App.css'
// import Recaptcha from './Recaptcha';
// import TextCaptcha from './TextCaptcha';
import MainModal from './MainModal';

function App() {

  const getVerificationStatus = (val)=>{
    console.log(val)
  }
  return (
    <>
    <h1 className='text-center'>Captcha Verification App</h1>
    <MainModal Verification={getVerificationStatus}/>
    {/* <Recaptcha/>
    <TextCaptcha/> */}
    </>
  );
}

export default App;
