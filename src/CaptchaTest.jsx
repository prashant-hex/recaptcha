import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha
} from "react-simple-captcha";


class CaptchaTest extends Component {

  constructor(){
    super();
    this.state = {
      isVerified:false,
      matched:true
    }
  }

  componentDidMount() {
    loadCaptchaEnginge(6);
  }

  doSubmit = () => {
    let user_captcha = document.getElementById("user_captcha_input").value;

    if (validateCaptcha(user_captcha) == true) {
      // console.log(this.state.isVerified)
      this.setState({isVerified:true, matched:true},()=>{
        console.log(this.state.isVerified)
      })
      // alert("Captcha Matched");
      loadCaptchaEnginge(6);
      document.getElementById("user_captcha_input").value = "";
      this.setState({isVerified:true},()=>{
        console.log(this.state.isVerified)
      })
    } else {
      this.setState({isVerified:false,matched:false})
      console.log(this.state.isVerified)
      // alert("Captcha Does Not Match");
      document.getElementById("user_captcha_input").value = "";
    }
    this.setState({isVerified:false},()=>{
      console.log(this.state.isVerified)
    })

  };

  render() {
    return (
      <div>
        <div className="container text-center">
          <div className="form-group">
            <div className="col mt-3">
              <LoadCanvasTemplate />
            </div>

            <div className="col mt-3">
              <div>
                <input
                  placeholder="Enter Captcha"
                  id="user_captcha_input"
                  name="user_captcha_input"
                  type="text"
                ></input>
              </div>
            </div>

            <p className="text-danger mb-4 mt-4">
            {
              this.state.matched ? null : 'Invalid Captcha '
            }
            </p>

            <div className="col mt-3">
              <div>
                <button
                  className="btn btn-primary"
                  onClick={() => this.doSubmit()}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CaptchaTest;