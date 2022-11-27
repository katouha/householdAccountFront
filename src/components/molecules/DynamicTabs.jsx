import React from "react";
import './../../resources/css/tab.css'
export const DynamicTabs = (props) =>{
    return(
        <div className={props.tabBaseStyle}>
            <div className="tabHeadArea">
                {props.tabHeadData ? props.tabHeadData.map((headData,index)=>{
                    return (<div key={index} className={props.headState == index + 1 ? "selectTab" : "notSelectTab"} onClick={headData.method}>{headData.title}</div>);
                })
                :
                null}
            </div>
            <div className="tabBodyArea">
                {props.tabBodyData ? props.tabBodyData.map((bodyData,index)=>{
                    return (<div key={index}>{props.headState === bodyData.idx ? bodyData.elem : null}</div>)
                })
                :
                null
                }
            </div>
        </div>
    )
}
