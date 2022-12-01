import React,{useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';
import './../../resources/css/template.css';
import './../../resources/css/userRegist.css'
import { TemplateContainer } from "./TemplateContainer";
import { FiLogOut } from "react-icons/fi";
import { API_RESULT_OK, MODAL_BODY_NEXT_LOGIN, MODAL_BODY_REGIST, MODAL_BODY_REGIST_ERROR, MODAL_BODY_REGIST_ERROR_INPUT, MODAL_BODY_REGIST_SUCCESS, MODAL_BTN_NAME_CANCEL, MODAL_BTN_NAME_LOGIN, MODAL_BTN_NAME_OK, MODAL_BTN_NAME_USER_INPUT, MODAL_TITLE_REGIST, MODAL_TITLE_REGIST_ERROR, MODAL_TITLE_REGIST_SUCCESS, MODAL_TITLE_USER_REGIST_CONF, PASS_LOGIN, PASS_USER_REGIST, PASS_USER_REGIST_CONF, REGIST_USER_API, SIDE_LOGIN, SIDE_RETURN_LOGIN, SIDE_USER_REGIST, SIDE_USER_REGIST_CONF } from "../../const/const";
import { TitleGroup } from "../atoms/TitleGroup";
import { DynamicTable } from "../molecules/DynamicTable";
import { Button } from "../atoms/Button";
import { DualRadioBtn } from "../molecules/DualRadioBtn"; 
import { ModalTemplateTwoBtn } from "../molecules/ModalTemplateTwoBtn";
import { ErrorMessage } from "../molecules/ErrorMessage";
import { useRecoilState, useRecoilValue } from 'recoil';
import { userRegistState } from '../../store/userRegist';
import { genderConvert, passwordAsterisk } from "../../const/logicConst";
import { ModalTemplateOneBtn } from "../molecules/ModalTemplateOneBtn";
import axios from "axios";

export const UserRegistConfirmContainer = (props) =>{

    const navigate = useNavigate();

    const [modalFlg,setModalFlg] = useState(false);
    const [resultModalFlg,setResultModalFlg] = useState(false);
    const [registSuccessFlg,setRegistSuccessFlg] = useState(false);
    const [userRegist, setUserRegist] = useRecoilState(userRegistState);


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
        return <FiLogOut className="wigetIcon"/>
    }
    const wigetList = [
        {labelName:SIDE_RETURN_LOGIN,method:loginUser,icon:loginIcon()}
    ]
    //サイドウィジェッドデータ作成ここまで
    //-----------------------------------------------------------


    /**
     * 登録確認モーダル開く
     * @returns なし
     */
    const onClickUserRegist = () => {
        setModalFlg(true);
    }

    /**
     * 登録確認モーダル閉じる
     */
    const modalClose = () => {
        setModalFlg(false);
    }

    /**
     * 登録エラーの場合はユーザ情報入力画面
     * 登録成功の場合はログイン画面遷移
     */
     const successModalClose = () => {
        //state切り替え
        setResultModalFlg(false);
        //storeの値をクリア
        setUserRegist({});
        //ログイン画面に遷移
        if(registSuccessFlg){
            navigate(PASS_LOGIN);
        }else{
            navigate(PASS_USER_REGIST);
        }
    }


    /**
     * ユーザ登録API呼び出し
     */
     const userRegistApiCall = async() => {
         //リクエスト内容生成
         let userRegistReqObj = {
             userName:userRegist.userName,
             userId:userRegist.userId,
             password:userRegist.password,
             mailAddress:userRegist.mailAddress,
             genderType:userRegist.gender,
             roleId:"1",
         }
        //ユーザ登録APIを呼び出す
        await axios.post(REGIST_USER_API,userRegistReqObj)
        .then(res => {
            let apiResult = res.data.result.returnCd;
            //api成功
            if(apiResult === API_RESULT_OK){
                //成功の場合 確認モーダルを閉じて成功モーダル表示
                setRegistSuccessFlg(true);
            }else{
                setRegistSuccessFlg(false);
            }
            setModalFlg(false);
            setResultModalFlg(true);
        })
    }


    //テーブル表示リスト
    const tableList = [
        [<td className="userRegistTd1">ユーザ名</td>,<td className="userRegistTd3">{userRegist.userName}</td>],
        [<td className="userRegistTd1">ログインID</td>,<td className="userRegistTd3">{userRegist.userId}</td>],
        [<td className="userRegistTd1">パスワード</td>,<td className="userRegistTd3">{passwordAsterisk(userRegist.password)}</td>],
        [<td className="userRegistTd1">メールアドレス</td>,<td className="userRegistTd3">{userRegist.mailAddress}</td>],
        [<td className="userRegistTd1">性別</td>,<td className="userRegistTd3">{genderConvert(userRegist.gender)}</td>]
    ]

    //モーダルボディ表示文言リスト
    const confModalBody = [MODAL_BODY_REGIST];
    const registSuccessModalBody = [MODAL_BODY_REGIST_SUCCESS,MODAL_BODY_NEXT_LOGIN];
    const registErrorModalBody = [MODAL_BODY_REGIST_ERROR,MODAL_BODY_REGIST_ERROR_INPUT];

    /**
     * TemplateContainer.jsxのボディ部に入れ込むエレメント生成する
     * @returns テンプレート内に挿入するボディエレメント
     */
    const body = () =>{
        return <div>
                    {modalFlg && !resultModalFlg ?
                        <ModalTemplateTwoBtn
                            openFlg={modalFlg}
                            modalStyle="userRegistModal"
                            onRequestClose={modalClose}
                            modalTitle={MODAL_TITLE_REGIST}
                            modalBody={confModalBody}
                            btnTitle1={MODAL_BTN_NAME_CANCEL}
                            btnTitle2={MODAL_BTN_NAME_OK}
                            onClick1 = {modalClose}
                            onClick2 = {userRegistApiCall}
                        />
                    :
                        <ModalTemplateOneBtn
                            openFlg={resultModalFlg}
                            modalStyle="userRegistModal"
                            onRequestClose={successModalClose}
                            modalTitle={registSuccessFlg ? MODAL_TITLE_REGIST_SUCCESS : MODAL_TITLE_REGIST_ERROR}
                            modalBody={registSuccessFlg ? registSuccessModalBody : registErrorModalBody}
                            btnTitle1={registSuccessFlg ? MODAL_BTN_NAME_LOGIN : MODAL_BTN_NAME_USER_INPUT}
                            modalBodyStyle={registSuccessFlg ? null : "errorStyle"}
                            onClick1 = {successModalClose}
                    />
                    }
                    <div className="userRegistContentArea">
                        <TitleGroup
                            className="userRegistGroupTitle"
                            titleName={"ユーザ情報"}
                        />
                        <DynamicTable
                            tableStyle="userRegistTableStyle"
                            trStyle="userRegistTrStyle"
                            tdStyle="userRegistTdStyle"
                            tableList={tableList}
                        />
                        <div className="registBtnArea">
                            <Button
                                onClick={onClickUserRegist}
                                className="registBtn"
                                value="登録"
                            />
                        </div>
                    </div>
                </div>
    }
    
    return(
        <TemplateContainer
            title={SIDE_USER_REGIST_CONF} 
        　  body={body()}
            wigetList={wigetList}
        />
        
    )
}