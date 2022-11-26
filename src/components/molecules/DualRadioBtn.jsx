import React from "react";
import { Input } from "../atoms/Input";
export const DualRadioBtn = (props) =>{
    return(
        <div className={props.radioAreaStyle}>
            <div className={props.radioSizeStyle}>
            {
            props.radioList.map((data,index)=>{
                return (
                    <div className={props.radioStyle}>
                        <Input
                            key={index}
                            type="radio"
                            name={props.name}
                            className={props.className}
                            value={data.value}
                            id={data.id}
                            onChange={props.onChange}
                        />
                        <label for={data.id}>{data.labelValue}</label>
                    </div>
                )
            })
            }
            </div>
        </div>
    )
}
