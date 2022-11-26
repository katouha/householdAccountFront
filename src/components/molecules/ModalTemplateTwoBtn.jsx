import React from "react";
import Modal from 'react-modal';
import { Button } from "../atoms/Button";
import { AiOutlineClose} from "react-icons/ai";
import './../../resources/css/modal.css';
export const ModalTemplateTwoBtn = (props) =>{
    return(
        <div className={props.formAreaClass}>
            <Modal
                isOpen={props.openFlg}
                style={props.modalStyle}
                onRequestClose={props.onRequestClose}
                ariaHideApp={false}
            >
                <div className={"modalHeader " + props.modalHeaderStyle}>
                    <p className="modalTitle">{props.modalTitle}</p>
                    <AiOutlineClose className="modalCloseCloss" onClick={props.onRequestClose}/>
                </div>
                <div className={"modalBody "+ props.modalBodyStyle}>
                    <div className="modalBodyBlock">
                        {props.modalBody.map((body)=>{
                            return (<div>{body}</div>)
                        })}
                    </div>
                </div>
                <div className={"modalBtnArea " + props.modalBtnArea}>
                    <Button
                        onClick={props.onClick1}
                        className="modalBtn1"
                        value={props.btnTitle1}
                    />
                    <Button
                        onClick={props.onClick2}
                        className="modalBtn2"
                        value={props.btnTitle2}
                    />
                </div>
            </Modal>
        </div>
    )
}
