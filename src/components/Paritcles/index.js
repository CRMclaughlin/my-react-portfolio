import Particles from "react-tsparticles";
import { useCallback } from "react";
import { loadFull } from "tsparticles";

function Particle(engine) {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
       
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);
    return (
        <Particles
            id="container-particle"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                "particles": {
                    "number": {
                        "value": 250
                    },
                    "color": {
                        "value": "#f72585"
                    },
                    "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 1,
                            "color": "#4361ee"
                        }
                    },
                    "opacity": {
                        "value": 0.5,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 1
                        }
                    },
                    "size": {
                        "value": 1,
                        "random": true,
                        "anim": {
                            "enable": true,
                            "speed": 1
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 120,
                        "color": "#7b2cbf"
                    },
                    "move": {
                        "enable": true,
                        "speed": 1,
                        "direction": "top",
                        "out_mode": "out",
                        "random": true
                    }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "grab"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "remove"
                        }
                    }
                }
            }}
        />
    );
}
export default Particle;