import React from 'react'

const ProjectDetails = (props) => {

    const id = props.match.params.id;

    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis natus reiciendis impedit minus, cum esse voluptates incidunt, praesentium dicta omnis voluptatum facere et nisi quia aliquid ipsam atque reprehenderit odio!</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Ninja H.B.</div>
                    <div>11th October, 10am</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
