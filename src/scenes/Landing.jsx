import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion"

const Landing = ({setSelectedPage}) => {
    const mdMediaQueryCheck = useMediaQuery("(min-width: 1060px)");

    return (
        <section 
            id="home" 
            className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10"
        >
            { /* HOME PAGE */}
            <div className="flex z-30 basis-2/5 mt-12 md:mt-32">
                { /* HEADING */ }
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.75 }}
                    variants={{
                        hidden: { opacity: 0, y: -50 },
                        visible: { opacity: 1, y: 0 }
                    }}
                >
                    <div className="text-[8rem] font-rubik z-10 text-center 
                    md:text-start tracking-widest whitespace-pre font-semibold">
                        <span className="block">
                        ZHI
                        </span>
                        <span>
                        ZHENG
                        </span>
                    </div>
                    <p className="mt-12 mb-7 text-ms text-center md:text-start text-dark-cyan text-2xl">
                        Computer Science Student / Researcher / Game Developer / Game Designer
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default Landing;