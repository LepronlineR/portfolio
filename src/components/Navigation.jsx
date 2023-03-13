import { AnimatePresence, motion } from "framer-motion";
import MenuItems from "./MenuItems";
import MenuResumeItems from "./MenuResumeItems";

const Navigation = ({isOpen, toggle}) => (
    <AnimatePresence>
        { (
        <motion.div
            className="z-[100] fixed mx-auto inset-x-0"
            variants={{
                open: {
                    transition: { staggerChildren: 0.25, delayChildren: 0.3 }
                },
                closed: {
                    transition: { staggerChildren: 0.10, staggerDirection: 5 }
                }
            }}
        >
            <MenuItems 
                pageName="Home"
                pageID="home"
                toggle={toggle}
                isOpen={isOpen}
            />
            <MenuItems 
                pageName="Portfolio"
                pageID="projects"
                toggle={toggle}
                isOpen={isOpen}
            />
            <MenuItems 
                pageName="About Me"
                pageID="about me"
                toggle={toggle}
                isOpen={isOpen}
            />
            <MenuResumeItems
                pageName="Resume"
                isOpen={isOpen}
            />
            <MenuItems 
                pageName="Contact Me"
                pageID="contact me"
                toggle={toggle}
                isOpen={isOpen}
            />
            
        </motion.div>
        )}
    </AnimatePresence>
);

/*
<MenuItems 
                pageName="My Games"
                pageID="games"
                toggle={toggle}
                isOpen={isOpen}
            />
*/

export default Navigation