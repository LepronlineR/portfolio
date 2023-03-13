import { motion } from "framer-motion";
import ImagesViewer from "../components/ImagesViewer";

const Projects = () => {
    return (
        <section id="projects" className="pt-48 pb-48">
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
                    <p className="text-[6rem] font-rubik tracking-widest whitespace-pre p-10">
                        MY PORTFOLIO
                    </p>
                </div>
                <ImagesViewer/>
                <p className="font-quicksand mt-10 mb-7">
                    hello world
                </p>
            </motion.div>

            { /* Projects */}
        </section>
    );
};

export default Projects;