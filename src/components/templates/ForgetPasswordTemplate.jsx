import React, { useState } from "react";
import { ForgetPasswordContainer } from "../organisms/ForgetPasswordContainer";
import { Loading } from "../molecules/Loading";
export const ForgetPasswordTemplate = (props) =>{

    const [loading,setLoading] = useState(false);
    const openLoading = (flg) => {
        setLoading(flg);
    }
    return(
        <>
            {loading ?
                <Loading />
                :
                null
            }
            <ForgetPasswordContainer 
                openLoading={openLoading}
            />
        </>
    )
}