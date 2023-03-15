import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Images from "./Images";

const buttonBackStyle = "p-0 text-lg w-10 aspect-square rounded-3xl border-none cursor-pointer text-center bg-dark-gray";


const wrapIndex = (index, max) => {
    if(index < 0){
        return max - 1;
    } else {
        return index % max;
    }
}

const ImagesViewer = () => {

    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const imageVariant = {
        hidden: direction => { 
            return {
                opacity: 0, 
                x: direction > 0 ? 750 : -750
            }
        },
        visible: { 
            opacity: 1, 
            x: 0 
        },
        exit: direction => { 
            return {
                opacity: 0, 
                x: direction > 0 ? -750 : 750
            }
        },
    }

    const imageControlButton = (num) => {
        setDirection(num);
        setIndex(wrapIndex(index + num, Images.length));
    }

    return (
        <div>
            <div className="p-0 m-0 flex box-border">
                <div className="m-auto w-[50vw] aspect-video relative overflow-hidden rounded-xl">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.img src={Images[index][0]}
                            className="rounded-xl absolute min-w-full bottom-0 left-0 object-cover"
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            alt='images'
                            transition={{ duration: 0.5 }}
                            variants={imageVariant}
                            key={Images[index]}
                            custom={direction}
                        />
                    </AnimatePresence>
                    <button
                        className={`${buttonBackStyle} absolute top-[50%] left-4 translate-y-1/2`}
                        onClick={() => imageControlButton(-1)}>
                        {'<'}
                    </button>
                    <button
                        className={`${buttonBackStyle} absolute top-[50%] right-4 translate-y-1/2`}
                        onClick={() => imageControlButton(1)}>
                        {'>'}
                    </button>
                </div>
            </div>
            <p className="font-quicksand mt-10 mb-7 text-lg">
                <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.75 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    key={Images[index]}
                    custom={direction}>

                    {Images[index][1]}
                </motion.div>
                </AnimatePresence>
            </p>
        </div>
    );
}

export default ImagesViewer