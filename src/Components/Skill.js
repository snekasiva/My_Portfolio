import React from 'react'
import Animate from '../Animate'
import SkillCard from './Skillc'
import html from "../html.png"
import css from "../css.png"
import js from "../js.png"
import sql from "../sql.png"
import python from "../python.png"
import github from "../github.png"
import react from "../react.png"
import code from "../code.png"
import bootstrap from "../bootstrap.png"
import { Link } from 'react-router-dom'

function Skill() {
    let skillList=[
        {
          image: html,
          title: "HTML",
          bar:"html",
          percentage:"95%"
        },
        {
          image: css,
          title: "CSS",
          bar:"css",
          percentage:"95%"
        },
        {
          image: js,
          title: "JavaScript",
          bar:"javascript",
          percentage:"75%"
        },
        {
            image: python,
            title: " python",
            bar:" python",
            percentage:"65%"
          },
        {
          image: bootstrap,
          title: "Bootstrap",
          bar:"bootstrap",
          percentage:"95%"
        },
        {
          image: react,
          title: "React",
          bar:"react",
          percentage:"85%"
        },
        
        
        {
          image: sql,
          title: "MySQL",
          bar:"sql",
          percentage:"65%"
        },
        {
          image: github,
          title: "GitHub",
          bar:"github",
          percentage:"65%"
        },
       
        
      ]
  return (
    <div>
        <Animate>
        <div className="container heading">
        <div className="main-skill">
          <h1 className="text-center text-light"><img className="size-2" src={code} />Skill</h1>
        </div>
        <div className='skills-1'>
          <div className="d-flex justify-content-between">
            <Link class="btn btn-dark rounded-circle mt-4" to={"/about"} role="button"><i class="fa fa-arrow-left" aria-hidden="true"></i></Link>
            <img className="skills " />
            <Link class="btn btn-dark rounded-circle mt-4" to={"/project"} role="button"><i class="fa fa-arrow-right" aria-hidden="true"></i></Link>
          </div>

        </div>
        <div className="skills">
          <h3 className="text-center sub">Technical</h3>
          <h5>I have become confident using following technologies</h5>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 m-4 skill-content">
            <div className='row skill-set'>
              {
                skillList.map((list)=>{
                  return <SkillCard list={list}/>
                })
              }
              </div>
          </div>
        </div>
      </div>
        </Animate>
    </div>
  )
}

export default Skill