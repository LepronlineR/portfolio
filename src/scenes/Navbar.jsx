import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import Navigation from "../components/Navigation";
import MenuToggle from "../components/MenuToggle";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import openNewTabLink from "../hooks/openNewTabLink";

const linkedinLink = "https://www.linkedin.com/in/zhizheng1/";
const githubLink = "https://github.com/LepronlineR";

const Navbar = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);

    return (
        <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            ref={containerRef}
        >
            <motion.div
                className="z-[100] bg-purple min-w-full min-h-full fixed"
                transition={{ duration: 0.75 }}
                variants={{
                    closed: { opacity: 0, x: "150%", y: 0 },
                    open: { opacity: 1, x: 0, y: 0 }
                }}
            />
            <Navigation 
                isOpen={isOpen}
                toggle={() => toggleOpen()} 
            />
            <div className="z-[101] fixed flex right-0 p-10 gap-[130px] py-10">
                <button
                    className="hover:opacity-50 transition duration-500"
                    onClick={() => openNewTabLink(linkedinLink)}
                >
                    <FontAwesomeIcon icon={faLinkedin} color="#A5E1AD" 
                    className="scale-[6]"/>
                </button>

                <button
                    className="hover:opacity-50 transition duration-500"
                    onClick={() => openNewTabLink(githubLink)}
                >
                    <FontAwesomeIcon icon={faGithub} color="#A5E1AD" 
                    className="scale-[6]"/>
                </button>
                <MenuToggle 
                    toggle={() => toggleOpen()} 
                />   
            </div>
        </motion.nav>
    );
}

export default Navbar