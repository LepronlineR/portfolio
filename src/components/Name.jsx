import { faZ, faH, faI } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"

const letterStyle = "scale-[10] flex right-0 p-10 gap-[130px]";

const Letter = (letter) => {
    return (
        <motion.div
            drag
            dragConstraints = {{left: 0, top: 0, right: 0, bottom: 0}}
        >
            <FontAwesomeIcon icon={`${letter}`} color="#A5E1AD"
                        className={letterStyle}/>
        </motion.div>
    )
}

const Name = () => {
    return (
        <>
            <motion.div
                drag = {true}
                dragConstraints = {{left: 0, top: 0, right: 0, bottom: 0}}
                dragElastic = {0.5}
            >
                <FontAwesomeIcon icon={faZ} color="#A5E1AD"
                            className={letterStyle}/>
            </motion.div>
        </>
    )
}

export default Name