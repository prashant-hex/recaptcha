import ReCAPTCHA from 'react-google-recaptcha'
import React , { useState }from 'react';
import axios from 'axios';

const Recaptcha = () => {

    const [token,setToken] = useState('')
    const [msg,setMsg] = useState(null)

  function onChange(value) {
    console.log('Captcha value:', value);
    setToken(value)
    axios.post(`https://cors-anywhere.herokuapp.com/https://www.google.com/recaptcha/api/siteverify`,{
        secret:'6LccgFAjAAAAAKPjYPn5l2RCA21rMJZHk05GNTBq',
        response:value,
        mode:'cors'
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
        setMsg(error.message)
      })

    // axios.post('https://www.google.com/recaptcha/api/siteverify ', {
    //     secret:'6LccgFAjAAAAAKPjYPn5l2RCA21rMJZHk05GNTBq',
    //     response:value,
    //     mode:'cors'
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    //   axios.get('https://dummyjson.com/products/1').then(console.log)
            
  }
  return (
    <div className="App">
      <ReCAPTCHA
        sitekey=""
        onChange={onChange}
      />
      <h1>
      {
        msg == null ? '' : msg
      }
      </h1>  
    </div>
  );
};

export default Recaptcha