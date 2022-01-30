import React from 'react';

function Modal() {
    return(
        <div className='previewModal--info' style={{opacity:1, transform: 'none'}}>
            <div className='detail-modal-container'>
                <div className='previewModal--detailsMetadata detail-modal has-smaller-buttons' data-uia='previewModal--detailsMetadata' ></div>
            </div>
        </div>
    ); 
}

export default Modal;
