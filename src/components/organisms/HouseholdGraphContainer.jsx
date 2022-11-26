import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { TemplateContainer } from "./TemplateContainer";
import { AiOutlineSearch,AiOutlineIdcard} from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { BsPencilSquare } from "react-icons/bs";
import { SIDE_HOUSEHOLD_REGIST,SIDE_HOUSEHOLD_SEARCH,SIDE_HOUSEHOLD_GRAPH,SIDE_USER_INFO_CHANGE,SIDE_LOGOUT, PASS_HOUSEHOLD_REGIST, PASS_HOUSEHOLD_SEARCH, PASS_USER_INFO_CHANGE, PASS_LOGIN} from "../../const/const";
import './../../resources/css/template.css';
import { useRecoilState} from 'recoil';
import { userState } from '../../store/login';
export const HouseholdGraphContainer = (props) =>{

    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useRecoilState(userState);

    useEffect(() => {
        //ログイン情報がない場合はログイン画面へ戻す(URL直打ち対応)
        if(!userInfo === undefined || !Object.keys(userInfo).length){
            navigate(PASS_LOGIN);
        }
    },[])

    //サイドウィジェッドデータ作成部
    //-----------------------------------------------------------
    /**
     * 家計簿登録画面遷移
     */
    const householdRegist = () => {
        navigate(PASS_HOUSEHOLD_REGIST);
    }
    /**
     * 家計簿検索画面遷移
     */
     const householdSearch = () => {
        navigate(PASS_HOUSEHOLD_SEARCH);
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
    const registIcon = () =>{
        return <BsPencilSquare className="wigetIcon"/>
    }
    const searchIcon = () =>{
        return <AiOutlineSearch className="wigetIcon"/>
    }
    const updateUserIcon = () =>{
        return <AiOutlineIdcard className="wigetIcon"/>
    }
    const logoutIcon = () =>{
        return <FiLogOut className="wigetIcon"/>
    }
    const wigetList = [
        {labelName:SIDE_HOUSEHOLD_REGIST,method:householdRegist,icon:registIcon()},
        {labelName:SIDE_HOUSEHOLD_SEARCH,method:householdSearch,icon:searchIcon()},
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
            title={SIDE_HOUSEHOLD_GRAPH} 
        　  body={body()}
            wigetList={wigetList}
        />
    )
}