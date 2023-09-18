import React from 'react'
import ProjectCard from './ProjectCard'
import Ecommerce from '../Ecommerce.png'
import Management from '../Management.png'
import Todo from "../Todo.png"
import { Link } from 'react-router-dom'
import Animate from '../Animate'


function Project() {
    let projectList = [
        {
            image: Management,
            title: "Video Chat",
            description: "Video Chat application using MERN and socket",
            frontEnd: "https://github.com/snekasiva/CRUD-operation",
            webLink: "https://vercel.com/snekasiva/crud-operation",
           
        },
        {
            image: Todo,
            title: "To-Do App",
            description: "Just Anothoer Interactive,Nice beautiful and small to-do application (MERN),Does Everything",
            frontEnd: "https://github.com/snekasiva/To-Do-Application",
            webLink: "https://vercel.com/snekasiva/to-do-application",
            
           
        },
        {
            image: Ecommerce,
            title: "Dental Clinic Mangement (MERN)",
            description: "Clini Management Application to store patients Data everything at one place.",
            frontEnd: "https://github.com/snekasiva/Ecommerce",
            webLink: "https://vercel.com/snekasiva/ecommerce",
            
        },
       
    ]
    return (
        <Animate>
            <div className="top">
                <h4 className="text-center mt-4 fs-1 text-light">Project</h4>
            </div>
            <div className="container project p-4">
                
                <div className="next-page">
                    <Link className="btn btn-dark rounded-circle ml-4" to={"/skill"}><i class="fa fa-arrow-left" aria-hidden="true"></i></Link>
                    <div className="row mt-5">
                        {
                            projectList.map((card) => {
                                return <ProjectCard card={card} />
                            })
                        }
                    </div>
                    <Link className="btn btn-dark rounded-circle ml-4" to={"/contact"}><i class="fa fa-arrow-right" aria-hidden="true"></i></Link>
                </div>

            </div>
        </Animate>

    )
}

export default Project