// import logo from './logo.svg';
import './App.css'
import Recaptcha from './Recaptcha';
import TextCaptcha from './TextCaptcha';
import MainModal from './MainModal';

function App() {
  return (
    <>
    <h1 className='text-center'>Captcha Verification App</h1>
    <MainModal />
    {/* <Recaptcha/>
    <TextCaptcha/> */}
    </>
  );
}

export default App;
