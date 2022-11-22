import React from "react";
import './../../resources/css/header.css'
import { Button } from "../atoms/Button";
import { Label } from "../atoms/Label";
import { useNavigate } from 'react-router-dom';
import Sidebar from 'react-sidebar';
import { AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
import {useState} from "react";
export const HeaderContainer = (props) =>{

    const navigate = useNavigate();

    const [wigetFlg,setWigetFlg] = useState(false);



    /**
     * サイドバーオープン
     */
    const openWiget = () => {
        setWigetFlg(true);
    }
    /**
     * サイドバークローズ
     */
     const closeWiget = () => {
        setWigetFlg(false);
    }

    //以下コンポーネントエレメント作成
    //-------------------------------------------------------------------
    const bargerArea = () => {
        return <div className={"wigetArea"} onClick={openWiget}>
                    <AiOutlineMenu className={"bargerIcon"}/>
                </div>
    }
    //サイドウィジェッド全体
    const wigetArea = () => {
        return <Sidebar
                    sidebar={wigetContents()}
                    open={wigetFlg}
                    onSetOpen={openWiget}
                    className="sideWiget"
                />
    }
    //サイドウィジェッド開いた際のコンポーネント
    const wigetContents = () => {
        return <div className={"sideWiget"}>
                    <div className={"sideWigetHeader"}><p>メニュー</p><AiOutlineClose onClick={closeWiget} className={"sideWigetCloseIcon"}/></div>
                    {
                        props.wigetList.map((wigetData,index)=>{
                            return <div key={index} className={"sideWigetLabel"} onClick={wigetData.method}>{wigetData.icon}{wigetData.labelName}</div>
                        })
                    }
                </div>
    }
    //コンポーネントエレメント作成ここまで
    //-------------------------------------------------------------------
    
    return(
        <>
            {props.loginFlg ? wigetArea() : null}
            <div className={"headerContant"}>
                <div　className={"headerContainer"}>
                    {props.loginFlg ? bargerArea() : null}
                    <Label 
                        className={"headerTitle"}
                        value={props.headText}
                    />
                </div>
            </div>
        </>
    )
}