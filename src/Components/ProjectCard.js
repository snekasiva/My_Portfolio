import React from 'react'
import github from "../github.png";
import website from "../Website.png"

function ProjectCard(props) {
    return (
        <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            <div class="card-body box">
                <img className="img-fluid mb-4 neosmile" src={props.card.image} />
                <h5 class="card-title"><strong>{props.card.title}</strong></h5>
                <p class="card-text">{props.card.description}</p>
                <p>
                    {props.card.backend?<a href={props.card.frontEnd} target="_blank" className="btn btn-dark btn-sm mx-2">Frontend</a>:<a href={props.card.webLink} target="_blank"><img className="img-fluid project-git" src={github} /></a>}
                    
                    <a href={props.card.webLink} target="_blank"><img className="img-fluid project-git" src={website} /></a>
                </p>
                <p class="card-text">{props.card.tools}</p>

            </div>
        </div>
    )
}

export default ProjectCard