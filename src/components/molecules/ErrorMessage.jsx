import React from "react";

export const ErrorMessage = (props) =>{
    return(
        <div className={"errorMessageArea"}>
            {props.errorMessage.length > 0 ? 
                props.errorMessage.map((message)=>{
                    return(
                        <div className={"errorMessage"}>{message}</div>
                    );
                })
                :
                null
            }
        </div>
    )
}
