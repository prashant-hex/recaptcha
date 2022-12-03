import ReCAPTCHA from 'react-google-recaptcha'
const Recaptcha = () => {
  function onChange(value) {
    console.log('Captcha value:', value);
  }
  return (
    <div className="App">
      <ReCAPTCHA
        sitekey=""
        onChange={onChange}
      />
    </div>
  );
};

export default Recaptcha