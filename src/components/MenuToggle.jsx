import { motion } from "framer-motion";
import MenuItems from "./MenuItems";

const Path = (props) => (
    <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke="hsl(128, 50%, 76%)"
        strokeLinecap="round"
        {...props}
    />
);

const MenuToggle = ({toggle}) => (
    <button
        onClick={toggle}
    >
        <svg 
            className="w-[100px] h-[100px]"
            viewBox="0.5 -1 21 21"
        >
            <Path
                variants={{
                    closed: { d: "M 2 16.346 L 20 16.346" },
                    open: { d: "M 3 2.5 L 17 16.346" }
                }}
            />
            <Path
                d="M 2 9.423 L 20 9.423"
                variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                }}
                transition={{ duration: 0.1 }}
            />
            <Path
                variants={{
                    closed: { d: "M 2 2.5 L 20 2.5" },
                    open: { d: "M 3 16.5 L 17 2.5" }
                }}
            />
        </svg>
    </button>
);

export default MenuToggle