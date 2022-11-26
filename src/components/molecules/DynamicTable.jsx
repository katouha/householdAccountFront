import React from "react";

export const DynamicTable = (props) =>{
    return(
        <table className={props.tableStyle}>
            <tbody>
            {
                props.tableList.map((tdData,trInd)=>{
                    return(
                    <tr className={props.trStyle} key={trInd}>
                        {tdData.map((data,tdInd)=>{
                            return(data)
                        })}
                    </tr>
                    )
                })
            }
            </tbody>
        </table>
    )
}
