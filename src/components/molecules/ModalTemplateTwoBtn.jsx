import React from "react";
import Modal from 'react-modal';
export const ModalTemplateTwoBtn = (props) =>{
    return(
        <div className={props.formAreaClass}>
            <Modal
                isOpen={props.openFlg}
                style={props.modalStyle}
            />
        </div>
    )
}
