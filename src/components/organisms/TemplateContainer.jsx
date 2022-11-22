import React from "react";
import {useState} from "react";
import { HeaderContainer } from "./HeaderContainer";
import './../../resources/css/template.css'
/**
 * テンプレートコンポーネント
 * 基本的にここではロジックは組まない想定
 * 親コンポーネントでロジックを組んでください
 * @param {*親からの引数} props 
 * @returns 画面テンプレートデータ埋め込み後のエレメント
 */
export const TemplateContainer = (props) =>{
    return(
        <div className={"templateContentBase"}>
            <HeaderContainer
                loginFlg = {true}
                headText = {"家計簿記録アプリ"}
                wigetList = {props.wigetList}
            />
            <div className="templateContent">
                <div className={"templateDummyElem"}/>
                <div className="templateContainer">
                    <div className={"templateBody"}>
                        <h2>{props.title}</h2>
                        {props.body}
                    </div>
                </div>
            </div>
        </div>
    )
}