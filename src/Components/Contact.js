import React, { useRef, useState } from 'react'
import Animate from '../Animate'
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import github from "../github.png";
import Call from "../call.gif";
import link from "../link.gif"

const Result=()=>{
   return(
     <p>sent successfully.. I will contact you soon</p>
   )
}
function Contact() {
  const [result, showResult] = useState(false)
  const form =useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cq28en9', 'template_555daat', form.current, 'qgx8l_fZhIrlW4PpT')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      e.target.reset()
      showResult(true);
  };

  return (
    <Animate>
      <div className="container contact">
        <div className="head">
          
          <h1 className="main-head text-light"><img className="size-2" src={Call} />Contact</h1>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div class="row">
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 left">
              <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 m-2">
                <input type="text" class="form-control" name="name" placeholder="Name" />
              </div>
              <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 m-2">
                <input type="mail" class="form-control" name="mail" placeholder="Mail" />
              </div>
              <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 m-2">
                <input type="text" class="form-control" name="subject" placeholder="Subject" />
              </div>
              <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 m-2">
                <textarea type="text" row="10" class="form-control" name="message" placeholder="Message" />
              </div>
              <button className="btn btn-primary m-2"> Submit </button>
              <div>{result? <Result/> :null}</div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 right">
              <p>I am a recent graduate who is enthusiastic about the prospect of joining your company. If your company is seeking candidates with qualifications and skills similar to mine, I kindly request that you notify me. Alternatively, you may simply reach out with a greeting by saying 'hello'.</p>
              <p><img style={{width:"20px", height:"20px"}} src={link}/><a href="https://github.com/snekasiva" target="_blank"><img className="link" src={github}/></a></p>
              <p><i class="fa fa-envelope bounce-1" aria-hidden="true"></i>-sneka1606@gmail.com</p>
              <p><i class="fa fa-phone" aria-hidden="true"></i>  +91 6369896968</p>
              <p><i class="fa fa-map-marker" aria-hidden="true"></i>Chennai,Tamilnadu</p>
            </div>
            <div><Link className="btn btn-dark btn-sm-3" to={"/project"}><i class="fa fa-arrow-left" aria-hidden="true"></i></Link></div>
            
          </div>
        </form>
      </div>
    </Animate>
  )
}
export default Contact;