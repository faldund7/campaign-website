import React from 'react';
// import { motion, AnimatePresence } from "framer-motion";
// import { modalOverlayVariants, staggerOne, modalFadeInUpVariants,  modalVariants} from './motionUtils.js';
import '../css/Modal.scss';
import { FaPlay } from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function ModalNew() {
    return( 
				<div>
					<div
						// variants={modalOverlayVariants}
						className={`Modal__overlay`}
                        // 1. className={`Modal__overlay ${modalClosed && 'Modal__invisible'}`}
					>
						<div
							// key="modal"
							// variants={modalVariants}
							// ref={modalRef}
                            className={`Modal__wrp`}
							// 2. className={`Modal__wrp ${modalClosed && 'Modal__invisible'}`}
						>
							<button
								className="Modal__closebtn"
								// onClick={handleModalClose}
							>
								<VscChromeClose />
							</button>
							<div className="Modal__image--wrp">
								<div className="Modal__image--shadow" />
								<img
									className="Modal__image--img"
									src="https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg"
									alt="Some Random"
								/>
								<div className="Modal__image--buttonswrp">
								<div
										className="Modal__image--button"
										// onClick={handlePlayAnimation}
									>
										<FaPlay />
										<span>Play</span>
								
								</div>
									
								</div>
							</div>
							<div 
							// variants={staggerOne} 
								className="Modal__info--wrp">
								<h3 
								// variants={modalFadeInUpVariants} 
								className="Modal__info--title">Dhathrutv Baddam Reddy</h3>
								<p 
								// variants={modalFadeInUpVariants} 
								className="Modal__info--description">Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.</p>
								{/* <hr 
								// variants={modalFadeInUpVariants} 
								className="Modal__info--line"/> */}
							</div>
						</div>
					</div>
				</div>
    ); 
}

export default ModalNew;
