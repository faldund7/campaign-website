import React from 'react';
// import { motion, AnimatePresence } from "framer-motion";
// import { modalOverlayVariants, staggerOne, modalFadeInUpVariants,  modalVariants} from './motionUtils.js';
import '../css/Modal.scss';
import { FaPlay } from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc";
import { Link } from "react-router-dom";

function Modal(props) {

    return( 
		<div>{
			// modalClosed &&
			props.show && 
			(<div
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
					onClick={() => props.showFunction(false)}
				>
					<VscChromeClose />
				</button>
				<div className="Modal__image--wrp">
					<div className="Modal__image--shadow" />
					<img
						className="Modal__image--img"
						src={props.modalThumbnail}
						alt="Some Random"
					/>
					{props.videoFlag && <div className="Modal__image--buttonswrp">
					<Link
							className="Modal__image--button"
							// onClick={handlePlayAnimation}
							to={'/play'}
						>

							<FaPlay />
							<span>Play</span>
					
					</Link>
						
					</div>}
				</div>

				{props.showFlag && <div 
				// variants={staggerOne} 
					className="Modal__info--wrp">
					<h3 
					// variants={modalFadeInUpVariants} 
					className="Modal__info--title">{props.modalTitle}</h3>
					<h6 
					// variants={modalFadeInUpVariants} 
					className="Modal__info--title">What</h6>
					<p 
					// variants={modalFadeInUpVariants} 
					className="Modal__info--description">{props.modalWhatData}</p>
					<h6 
					// variants={modalFadeInUpVariants} 
					className="Modal__info--title">Why</h6>
					<p 
					// variants={modalFadeInUpVariants} 
					className="Modal__info--description">{props.modalWhyData}</p>
					{/* <hr 
					// variants={modalFadeInUpVariants} 
					className="Modal__info--line"/> */}
				</div>}
				{!props.showFlag && <div 
				// variants={staggerOne} 
					className="Modal__info--wrp">
					<h3 
					// variants={modalFadeInUpVariants} 
					className="Modal__info--title">{props.modalTitle}</h3>
					<p 
					// variants={modalFadeInUpVariants} 
					className="Modal__info--description">{props.modalInfo}</p>
					{/* <hr 
					// variants={modalFadeInUpVariants} 
					className="Modal__info--line"/> */}
				</div>}
			</div>
		</div>)
			}

				</div>
	
				
    ); 
}

export default Modal;
