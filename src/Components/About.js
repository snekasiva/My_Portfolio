import React from 'react'
import Animate from '../Animate'
import { Link } from 'react-router-dom'
import mypic from "../my pic.jpeg"
import call from '../call.gif'
function About() {
  return (
    <div>
        <Animate>
        <div className="container about">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 image">
                            <img className="img-fluid rounded float-center img" src={mypic} alt="profile pic"
                                style={{ width: "60%", margin: "20px 20px" }} />
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 aboutMe">
                            <p> <h1 className="text-center text-light text-inline">About</h1></p>
                            <p className="words">
                            Hello, I am a highly motivated and skilled engineering graduate who is actively seeking an entry-level position as a frontend developer. I possess a strong background in design and integration, coupled with intuitive problem-solving skills. I am passionate about contributing my ideas and continuously expanding my knowledge. I am open to exploring job opportunities that align with my interests and skills.
                            </p>
                            
                            <div>
                                <Link class="btn btn-dark mt-4 btn-s" to={"/contact"} role="button">Contact Me <img src={call} style={{width:"20px", height:"20px"}}/> </Link>
                            </div>
                            <div className="d-flex justify-content-between">
                            <Link class="btn btn-dark rounded-circle mt-4 btn-s" to={"/"} role="button"><i class="fa fa-arrow-left" aria-hidden="true"></i></Link>
                                <Link class="btn btn-dark rounded-circle mt-4 btn-s" to={"/skill"} role="button"><i class="fa fa-arrow-right" aria-hidden="true"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
        </Animate>
    </div>
  )
}

export default About