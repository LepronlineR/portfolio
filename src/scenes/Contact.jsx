import { motion } from "framer-motion";
import ContactPicture from '../assets/temp_img_3.jpg'

const Contact = () => {
    return (
        <section id="contact me" className="py-48">
            {/* Header */}
            <motion.div
                className="md:w-2/4 mx-auto items-center justify-center flex"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 }
                }}
            >
                
                <div className="text-[6rem] font-rubik tracking-widest whitespace-pre 
                font-semibold text-right p-10">
                    <span className="block">
                        CONTACT
                    </span>
                    <span>
                        ME
                    </span>
                </div>
                <img
                    alt="contact-picture"
                    className="basis-10 max-w-[50%]"
                    src={ContactPicture}
                />
            </motion.div>
            {/* Email */}
            <motion.div
                className="md:w-2/4 mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 }
                }}
            >
                <a className="font-quicksand mt-10 mb-7 text-left text-4xl z-1 text-dark-cyan hover:text-blue"
                href="mailto:zhizheng835@gmail.com">
                    zhizheng835@gmail.com
                </a>
            </motion.div>
        </section>
    )
}

export default Contact