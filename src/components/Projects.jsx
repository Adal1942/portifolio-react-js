import { Col, Container, Nav, Row, Tab, Table, Tabs } from "react-bootstrap";
import { ProjectCard } from "./ProjectCards";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Projects = () => {
    
    const projects = [
        {
            title: "Made in Pixel",
            description: "Site de vendas",
            go: ('https://adal1942.github.io/Novo-site/'),
            imgUrl: projImg1,
        },
        {
            title: "Você sabe?",
            description: "Jogo de perguntas",
            go: ('https://do-you-know-test.netlify.app/'),
            imgUrl: projImg2,
        },
        {
            title: "Genius",
            description: "Jogo Genius",
            go: ('https://adal1942.github.io/Genius/'),
            imgUrl: projImg3,
        },
    ];

    const projects2 = [
        {
            title: "Business Startup",
            description: "Jogo Genius",
            go: ('https://adal1942.github.io/Genius/'),
            imgUrl: projImg3,
        },
        {
            title: "Business Startup",
            description: "Jogo de perguntas",
            go: ('https://do-you-know-test.netlify.app/'),
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: "Site de vendas",
            go: ('https://adal1942.github.io/Novo-site/'),
            imgUrl: projImg1,
        },
    ];
    
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                    {({ isVisible }) =>
                        <div className={isVisible ? "animated__animated animate__bounce": ""}>
                            <h2>Projects</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>}
                    </TrackVisibility>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab One</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab Two</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project, index) => {
                                            return (
                                                <ProjectCard key={index} {...project} />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Row>
                                    {
                                        projects2.map((project, index) => {
                                            return (
                                                <ProjectCard key={index} {...project} />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}