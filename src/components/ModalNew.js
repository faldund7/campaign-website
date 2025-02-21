import React from 'react';
import { motion } from "framer-motion";
import { modalOverlayVariants, staggerOne, modalFadeInUpVariants,  modalVariants} from './motionUtils.js';
import '../css/Modal.scss';
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";


function Modal() {
    return( 
				<div>
					<motion.div
						variants={modalOverlayVariants}
						initial="hidden"
						animate="visible"
						exit="hidden"
						key="modalOverlay"
						className={`Modal__overlay`}
                        // 1. className={`Modal__overlay ${modalClosed && 'Modal__invisible'}`}
					>
						<motion.div
							key="modal"
							variants={modalVariants}
							// ref={modalRef}
                            className={`Modal__wrp`}
							// 2. className={`Modal__wrp ${modalClosed && 'Modal__invisible'}`}
						>
							<motion.button
								className="Modal__closebtn"
								// onClick={handleModalClose}
							>
								{/* <VscChromeClose /> */}
							</motion.button>
							<div className="Modal__image--wrp">
								<div className="Modal__image--shadow" />
								<img
									className="Modal__image--img"
									src="https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg"
									alt="Some Random"
								/>
								<div className="Modal__image--buttonswrp">
									<Link
										className="Modal__image--button"
										// onClick={handlePlayAnimation}
										// to={'/play'}
									>
										<FaPlay />
										<span>Play</span>
									</Link>
								</div>
							</div>
							<motion.div variants={staggerOne} initial="initial" animate="animate" exit="exit" className="Modal__info--wrp">
								<motion.h3 variants={modalFadeInUpVariants} className="Modal__info--title">Name and Last Name</motion.h3>
								<motion.p variants={modalFadeInUpVariants} className="Modal__info--description">Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.</motion.p>
								<motion.hr variants={modalFadeInUpVariants} className="Modal__info--line"/>
							</motion.div>
						</motion.div>
					</motion.div>
				</div>
    ); 
}

export default Modal;
