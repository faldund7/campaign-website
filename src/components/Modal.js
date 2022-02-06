import React from 'react';
import { motion, AnimatePresence } from "framer-motion";

function Modal() {
    return(
        <div>
            <AnimatePresence exitbeforeEnter>
                <>
                    <motion.div
                        variants={modalOverlayVariants}
						initial="hidden"
						animate="visible"
						exit="hidden"
						key="modalOverlay"
						className={`Modal__overlay ${modalClosed && 'Modal__invisible'}`}>

                    </motion.div>
                </>
            </AnimatePresence>
        </div>
    ); 
}

export default Modal;
