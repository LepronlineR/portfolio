import { motion } from "framer-motion";
import openNewTabLink from "../hooks/openNewTabLink";
import Resume from "../assets/Zhi_Zheng_Resume.pdf";

const MenuResumeItems = ({pageName, isOpen}) => {
    return (
        <motion.div
            variants={{
                open: {
                    y: 0,
                    opacity: 1,
                    transition: {
                        y: { stiffness: 1000, velocity: -100 },
                    },
                    display: "block"
                },
            
                closed: {
                    y: "100%",
                    opacity: 0,
                    transition: {
                        y: { stiffness: 1000 },
                    },
                    display: "none"
                }
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <div className="flex justify-center mr-0 text-[6rem] mb-5 mt-5">
                {
                    isOpen ? (
                        <button
                            className="text-green transition duration-500"
                            onClick={() => openNewTabLink(Resume)}
                        >
                            { pageName }
                        </button>
                    ) : (
                        <>
                            { pageName }
                        </>
                    )
                }
            </div>
        </motion.div>
    );
};

export default MenuResumeItems