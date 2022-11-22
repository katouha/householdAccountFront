import React from "react";
import { useNavigate } from 'react-router-dom';
import { TemplateContainer } from "./TemplateContainer";
import { AiOutlineBarChart,AiOutlineIdcard} from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { BsPencilSquare } from "react-icons/bs";
import './../../resources/css/template.css';
export const HouseholdSearchContainer = (props) =>{

    const navigate = useNavigate();

    //サイドウィジェッドデータ作成部
    //-----------------------------------------------------------
    /**
     * 家計簿登録画面遷移
     */
    const householdRegist = () => {
        navigate("/householdRegist");
    }
    /**
     * 家計簿グラフ閲覧画面遷移
     */
     const householdGraph = () => {
        navigate("/householdGraph");
    }
    /**
     * ユーザ情報変更画面画面遷移
     */
     const userUpdate = () => {
        navigate("/userUpdate");
    }
    /**
     * ログアウト処理
     */
     const logoutUser = () => {
        navigate("/login");
    }

    //以下コンポーネント返却
    const registIcon = () =>{
        return <BsPencilSquare className="wigetIcon"/>
    }
    const graphIcon = () =>{
        return <AiOutlineBarChart className="wigetIcon"/>
    }
    const updateUserIcon = () =>{
        return <AiOutlineIdcard className="wigetIcon"/>
    }
    const logoutIcon = () =>{
        return <FiLogOut className="wigetIcon"/>
    }
    const wigetList = [
        {labelName:"家計簿登録",method:householdRegist,icon:registIcon()},
        {labelName:"家計簿グラフ",method:householdGraph,icon:graphIcon()},
        {labelName:"ユーザ情報変更",method:userUpdate,icon:updateUserIcon()},
        {labelName:"ログアウト",method:logoutUser,icon:logoutIcon()}
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
            title={"家計簿閲覧"} 
        　  body={body()}
            wigetList={wigetList}
        />
    )
}