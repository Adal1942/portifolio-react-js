import { Col } from "react-bootstrap"

export const ProjectCard = ({ title, description, imgUrl, go }) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <br/>
                    <button><a href={go} target="_blank" className="go">Visitar</a></button>
                </div>
            </div>
        </Col>
    )
}