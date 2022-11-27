import React from "react";
import ReactLoading from 'react-loading';
import './../../resources/css/loading.css'
export const Loading = (props) =>{
    return(
        <div className={props.formAreaClass}>
            <div className="backbase"></div>
            <ReactLoading
                type={"spokes"}
                width="70px"
                height="70px"
                color="#ffec00"
                className={"loading"}
            />
        </div>
    )
}
