import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './../../resources/css/householdRegist.css';
import { TemplateContainer } from "./TemplateContainer";
import { FiLogIn } from "react-icons/fi";
import { API_RESULT_OK, MODAL_BODY_REISSUE, MODAL_BODY_REISSUE_ERROR, MODAL_BODY_REISSUE_ERROR_SUPPORT, MODAL_BODY_REISSUE_SUCCESS, MODAL_BODY_REISSUE_SUCCESS_SUPPORT, MODAL_BTN_NAME_CANCEL, MODAL_BTN_NAME_CLOSE, MODAL_BTN_NAME_LOGIN, MODAL_BTN_NAME_OK, MODAL_TITLE_REISSUE, MODAL_TITLE_REISSUE_ERROR, MODAL_TITLE_REISSUE_SUCCESS, PASS_LOGIN, REISSUE_PASSWORD_API, SIDE_FORGET_PASSOWRD, SIDE_LOGIN } from "../../const/const";
import { ErrorMessage } from "../molecules/ErrorMessage";
import { TitleGroup } from "../atoms/TitleGroup";
import { DynamicTable } from "../molecules/DynamicTable";
import { Button } from "../atoms/Button";
import { ModalTemplateTwoBtn } from "../molecules/ModalTemplateTwoBtn";
import { ModalTemplateOneBtn } from "../molecules/ModalTemplateOneBtn";
import axios from "axios";

export const ForgetPasswordContainer = (props) =>{

    const navigate = useNavigate();
    const [modalFlg,setModalFlg] = useState(false);
    const [resultModalFlg,setResultModalFlg] = useState(false);
    const [reissueSuccessFlg,setReissueSuccessFlg] = useState(false);
    const [loginId,setLoginId] = useState("");
    const [errorMessage,setErrorMessage] = useState([]);

    //サイドウィジェッドデータ作成部
    //-----------------------------------------------------------

    /**
     * 入力値をstateにセット
     * @param {*入力値} e 
     */
     const handleChange = (e) => {
        switch(e.target.id){
            case 'loginId':
                setLoginId(e.target.value);
                break;
        }
    }

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
     * 再発行モーダル開く
     * @returns なし
     */
     const modalOpen = () => {
         if(validation()){
            return;
         }
        setModalFlg(true);
    }

    /**
     * 再発行モーダル閉じる
     */
    const modalClose = () => {
        setModalFlg(false);
    }


    /**
     * 入力値バリデーションチェック
     * @returns エラーメッセージリスト
     */
     const validation = () => {
        let validationFlg = false;
        const messageList = [];
        if(!loginId){
            messageList.push("ログインIDを入力してください");
            validationFlg = true;
        }else if(loginId.length > 100){
            messageList.push("ログインIDは100文字以内で入力してください");
            validationFlg = true;
        }
        if(validationFlg){
            //バリデーションメッセージにエラーメッセージセット
            setErrorMessage(messageList);
        }
        else{
            //バリデーションメッセージを初期化
            setErrorMessage([]);
        }
        return validationFlg;
    }

    /**
     * 確認モーダルOK押下時
     */
    const reissueApiCall = async() => {
        //パスワード再発行APIを呼び出す
        await axios.post(REISSUE_PASSWORD_API,{userId:loginId})
        .then(res => {
            let apiResult = res.data.returnCd;
            //api成功
            if(apiResult === API_RESULT_OK){
                //成功の場合 確認モーダルを閉じて成功モーダル表示
                setReissueSuccessFlg(true)
            }else{
                setReissueSuccessFlg(false);
            }
            setModalFlg(false);
            setResultModalFlg(true);
        })
    }

        /**
     * 登録エラーの場合はユーザ情報入力画面
     * 登録成功の場合はログイン画面遷移
     */
         const successModalClose = () => {
            //state切り替え
            setResultModalFlg(false);
            //ログイン画面に遷移
            if(reissueSuccessFlg){
                navigate(PASS_LOGIN);
            }
        }

    //テーブル表示リスト
    const tableList = [
        [<td className="userRegistTd1">ログインID</td>,<td className="userRegistTd2"><input type="text" className={"userRegistInputForm"} id="loginId" onChange={handleChange}/></td>]    
    ]

    //モーダルボディ表示文言リスト
    const confModalBody = [MODAL_BODY_REISSUE];
    const registSuccessModalBody = [MODAL_BODY_REISSUE_SUCCESS,MODAL_BODY_REISSUE_SUCCESS_SUPPORT];
    const registErrorModalBody = [MODAL_BODY_REISSUE_ERROR,MODAL_BODY_REISSUE_ERROR_SUPPORT];

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
                            modalTitle={MODAL_TITLE_REISSUE}
                            modalBody={confModalBody}
                            btnTitle1={MODAL_BTN_NAME_CANCEL}
                            btnTitle2={MODAL_BTN_NAME_OK}
                            onClick1 = {modalClose}
                            onClick2 = {reissueApiCall}
                        />
                    :
                        <ModalTemplateOneBtn
                            openFlg={resultModalFlg}
                            modalStyle="userRegistModal"
                            onRequestClose={successModalClose}
                            modalTitle={reissueSuccessFlg ? MODAL_TITLE_REISSUE_SUCCESS : MODAL_TITLE_REISSUE_ERROR}
                            modalBody={reissueSuccessFlg ? registSuccessModalBody : registErrorModalBody}
                            btnTitle1={reissueSuccessFlg ? MODAL_BTN_NAME_LOGIN : MODAL_BTN_NAME_CLOSE}
                            modalBodyStyle={reissueSuccessFlg ? null : "errorStyle"}
                            onClick1 = {successModalClose}
                    />
                    }
                    <div className="userRegistContentArea">
                        <ErrorMessage
                            errorMessage={errorMessage}
                        />
                        <TitleGroup
                            className="userRegistGroupTitle"
                            titleName={"パスワード再発行"}
                        />
                        <DynamicTable
                            tableStyle="userRegistTableStyle"
                            trStyle="userRegistTrStyle"
                            tdStyle="userRegistTdStyle"
                            tableList={tableList}
                        />
                        <div className="registBtnArea">
                            <Button
                                onClick={modalOpen}
                                className="registBtn"
                                value="再発行"
                            />
                        </div>
                    </div>
                </div>
    }
    
    return(
        <TemplateContainer
            title={SIDE_FORGET_PASSOWRD} 
        　  body={body()}
            wigetList={wigetList}
        />
    )
}