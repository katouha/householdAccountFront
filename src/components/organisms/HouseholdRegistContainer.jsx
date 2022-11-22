import React from "react";
import { useNavigate } from 'react-router-dom';
import { TemplateContainer } from "./TemplateContainer";
import { AiOutlineBarChart,AiOutlineIdcard,AiOutlineSearch} from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { SIDE_HOUSEHOLD_REGIST,SIDE_HOUSEHOLD_SEARCH,SIDE_HOUSEHOLD_GRAPH,SIDE_USER_INFO_CHANGE,SIDE_LOGOUT, PASS_HOUSEHOLD_SEARCH, PASS_HOUSEHOLD_GRAPH, PASS_USER_INFO_CHANGE, PASS_LOGIN} from "../../const/const";
import './../../resources/css/template.css';
export const HouseholdRegistContainer = (props) =>{

    const navigate = useNavigate();

    //サイドウィジェッドデータ作成部
    //-----------------------------------------------------------
    /**
     * 家計簿検索画面遷移
     */
    const householdSearch = () => {
        navigate(PASS_HOUSEHOLD_SEARCH);
    }
    /**
     * 家計簿グラフ閲覧画面遷移
     */
     const householdGraph = () => {
        navigate(PASS_HOUSEHOLD_GRAPH);
    }
    /**
     * ユーザ情報変更画面画面遷移
     */
     const userUpdate = () => {
        navigate(PASS_USER_INFO_CHANGE);
    }
    /**
     * ログアウト処理
     */
     const logoutUser = () => {
        navigate(PASS_LOGIN);
    }

    //以下コンポーネント返却
    const searchIcon = () =>{
        return <AiOutlineSearch className="wigetIcon"/>
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
        {labelName:SIDE_HOUSEHOLD_SEARCH,method:householdSearch,icon:searchIcon()},
        {labelName:SIDE_HOUSEHOLD_GRAPH,method:householdGraph,icon:graphIcon()},
        {labelName:SIDE_USER_INFO_CHANGE,method:userUpdate,icon:updateUserIcon()},
        {labelName:SIDE_LOGOUT,method:logoutUser,icon:logoutIcon()}
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
            title={SIDE_HOUSEHOLD_REGIST} 
        　  body={body()}
            wigetList={wigetList}
        />
    )
}