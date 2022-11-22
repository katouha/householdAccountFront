import React from "react";
import { HeaderContainer } from "../organisms/HeaderContainer";
import { LoginContainer } from "../organisms/LoginContainer";
export const LoginTemplate = (props) =>{
    return(
        <>
            <HeaderContainer 
                displayFlg = {false} 
                headText = {"家計簿記録アプリ"}    
            />
            <LoginContainer />
        </>
    )
}