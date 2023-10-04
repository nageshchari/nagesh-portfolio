import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/img/header-img.svg"

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleted] = useState(false);
    const toRotate = [ "UI/UX Designer", "UI/UX Designer", "UI/UX Designer" ];
    const [text, setText] = useState('');
    const [delta, setdelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            ticker();
        },delta )

        return () => { clearInterval(ticker)}
    }, [text] )

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedtext = isDeleting ? fullText.substring(0, text.lenght - 1) : fullText.substring(0, text.lenght + 1);

        setText(updatedtext);

        if (isDeleting) {
            setdelta(prevDelta => prevDelta /2)
        }

        if
    }
    
    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi! I'm Nagesh Chari`}<br></br><span className="wrap">UI/UX Designer</span></h1>
                        <p>Master's in Computer Application graduate with a strong passion for graphic designing and UI/UX. Proficient in using design tools and technologies to create visually appealing and user-centric interfaces. Eager to contribute innovative design solutions to enhance user experiences.</p>
                        <button onClick={() => console.log('connect')}>Lets connect<ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Headder Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}