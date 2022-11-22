import React from "react";
import { useNavigate } from 'react-router-dom';
import './../../resources/css/template.css';
import { TemplateContainer } from "./TemplateContainer";
import { FiLogIn } from "react-icons/fi";
import { PASS_LOGIN, SIDE_LOGIN, SIDE_USER_REGIST } from "../../const/const";
export const UserRegistContainer = (props) =>{

    const navigate = useNavigate();

    //サイドウィジェッドデータ作成部
    //-----------------------------------------------------------

    /**
     * ログイン画面遷移
     */
     const loginUser = () => {
        navigate(PASS_LOGIN);
    }

    //以下アイコンコンポーネント返却
    const loginIcon = () =>{
        return <FiLogIn className="wigetIcon"/>
    }
    const wigetList = [
        {labelName:SIDE_LOGIN,method:loginUser,icon:loginIcon()}
    ]
    //サイドウィジェッドデータ作成ここまで
    //-----------------------------------------------------------

    /**
     * TemplateContainer.jsxのボディ部に入れ込むエレメント生成する
     * @returns テンプレート内に挿入するボディエレメント
     */
    const body = () =>{
        return <div>ここにテンプレートのボディに入れる内容を入れ込んでください</div>
    }
    
    return(
        <TemplateContainer
            title={SIDE_USER_REGIST} 
        　  body={body()}
            wigetList={wigetList}
        />
    )
}