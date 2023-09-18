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
            title: "Management app",
            description: "It helps management to manage Student and Teacher details.",
            frontEnd: "https://github.com/snekasiva/CRUD-operation",
            webLink: "https://vercel.com/snekasiva/crud-operation",
           
        },
        {
            image: Todo,
            title: "To-Do App",
            description: "It is an application specially built to keep track of errands or tasks that need to be done",
            frontEnd: "https://github.com/snekasiva/To-Do-Application",
            webLink: "https://vercel.com/snekasiva/to-do-application",
            
           
        },
        {
            image: Ecommerce,
            title: "Ecommerce application",
            description: "E-Commerce is the buying and selling of goods and services over the internet.",
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
