import { motion } from "framer-motion";
import ProfilePicture from '../assets/me_1.png';

const About = () => {
    return (
        <section id="about me" className="pt-48 pb-48">
            { /* Heading */}
            <motion.div
                className="md:w-2/4 mx-auto text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 }
                }}
            >
                <div>
                    { // PROFILE PICTURE 
                    }
                    <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
                        <img
                        alt="profile-picture"
                        className="hover:filter hover:contrast-more:opacity-100 transition duration-500 z-10 w-full
                            max-width-[150px] md: max-w-[200px]"
                        src={ProfilePicture}
                        />
                    </div>
                    <p className="text-[6rem] font-rubik tracking-widest whitespace-pre p-10">
                        ABOUT ME
                    </p>
                </div>
            </motion.div>

            { /* me */}
            <motion.div
                className="md:w-2/4 mx-auto text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 }
                }}
            >
                <p className="font-quicksand mt-10 mb-7 text-dark-cyan text-xl">
                    Hello and welcome to my page. I am Zhi Zheng, I immigrated to NYC when I was around 6, grew up and lived here ever since. I studied game design, game development, and computer science at RPI. 
                    As a computer science student, who constantly learns about new paradigms, technologies, and theories. I want to keep following my passions and strive to improve myself at every step. 
                    As a competitive and result driven person, not only do I want to keep pushing myself out of my own boundary, but also push what we consider experimental and impossible to reality.
                </p>
            </motion.div>
            
            { /* hobbies 
            <motion.div
                className="md:w-2/4 mx-auto text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 }
                }}
            >
                <div>
                    <p className="text-[6rem] font-rubik tracking-widest whitespace-pre p-10">
                        HOBBIES
                    </p>
                </div>
            </motion.div>
        */}
        </section>
    );
}

export default About;