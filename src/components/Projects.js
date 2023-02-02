import Carousel from 'react-bootstrap/Carousel';

import ImageGen from '../assets/AIimageGen-min.png'
import Codex from '../assets/AIcodex-min.png'
import House from '../assets/HouseRules-min.png'
import Mood from '../assets/mood4food.png'

// Carousel from href=https://react-bootstrap.github.io/components/carousel/
function Projects() {
    return (
        <div className='container mt-5'>
            <Carousel slide={false}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ImageGen}
                        alt="AI Image Generator Website"
                    />
                    <Carousel.Caption>
                        <h3 className="text-secondary fw-bolder text-decoration-underline">AI Image Generator Using DALL-E</h3>
                        <p className="text-secondary fw-bolder">This is a simple image generator built with Node.js and Express that uses OpenAI's DALL_E models</p>
                    </Carousel.Caption>
                </Carousel.Item>


                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Codex}
                        alt="AI Codex Website"
                    />

                    <Carousel.Caption>
                        <h3 className="text-decoration-underline">AI Codex Using OpenAI</h3>
                        <p>This is a simple web app that use OpenAI chatGPT to help you code!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={House}
                        alt="House Rules Website"

                    />

                    <Carousel.Caption>
                        <h3 className="text-dark bg-light fw-bolder text-decoration-underline">House Rules</h3>
                        <p className="h-25 d-inline-block text-dark bg-light">
                        This web app lets a user create an account, read posts about gaming, and write thier own posts.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Mood}
                        alt="House Rules Website"
                    />

                    <Carousel.Caption>
                        <h3 className="text-decoration-underliner">Mood for Food</h3>
                        <p>
                            This is a simple web app that allows a user to pick their desired date that returns a daily horoscope and food suggestion
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="container text-center">
                <section className="mb-4" />
                <a className="btn btn-outline-light btn-floating m-1" href="https://still-scrubland-96431.herokuapp.com/" target="_blank" rel="noreferer" role="button"> AI Image Generator
                </a>
                <a className="btn btn-outline-light btn-floating m-1" href="https://guarded-sands-43499.herokuapp.com/" target="_blank" role="button">
                    AI Codex
                </a>
                <a className="btn btn-outline-light btn-floating m-1" href="https://house-rules.herokuapp.com/" target="_blank" role="button">
                    House Rules
                </a>
                <a className="btn btn-outline-light btn-floating m-1" href="https://stackoverflow.com/" target="_blank" role="button">
                    Mood for Food
                </a>
            </div>
        </div>
    );
}

export default Projects;