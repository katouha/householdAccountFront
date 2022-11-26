import React,{useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';
import './../../resources/css/template.css';
import './../../resources/css/userRegist.css'
import { TemplateContainer } from "./TemplateContainer";
import { FiLogIn } from "react-icons/fi";
import { API_RESULT_OK, MODAL_BODY_NEXT_LOGIN, MODAL_BODY_REGIST, MODAL_BODY_REGIST_ERROR, MODAL_BODY_REGIST_ERROR_INPUT, MODAL_BODY_REGIST_SUCCESS, MODAL_BTN_NAME_CANCEL, MODAL_BTN_NAME_LOGIN, MODAL_BTN_NAME_OK, MODAL_BTN_NAME_USER_INPUT, MODAL_TITLE_REGIST, MODAL_TITLE_REGIST_ERROR, MODAL_TITLE_REGIST_SUCCESS, MODAL_TITLE_USER_REGIST_CONF, PASS_LOGIN, PASS_USER_REGIST, PASS_USER_REGIST_CONF, REGIST_USER_API, SIDE_LOGIN, SIDE_USER_REGIST } from "../../const/const";
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

    const [errorMessage,setErrorMessage] = useState([]);
    const [modalFlg,setModalFlg] = useState(false);
    const [successModalFlg,setSuccessModalFlg] = useState(false);
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
        return <FiLogIn className="wigetIcon"/>
    }
    const wigetList = [
        {labelName:SIDE_LOGIN,method:loginUser,icon:loginIcon()}
    ]
    //サイドウィジェッドデータ作成ここまで
    //-----------------------------------------------------------


    /**
     * ユーザ登録処理
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
     * 登録確認モーダル閉じる
     */
     const successModalClose = () => {
        //state切り替え
        setSuccessModalFlg(false);
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
             genderType:userRegist.gender
         }
        //ユーザ登録APIを呼び出す
        await axios.post(REGIST_USER_API,userRegistReqObj)
        .then(res => {
            let apiResult = res.data.result.returnCd;
            //api成功
            if(apiResult === API_RESULT_OK){
                //成功の場合 確認モーダルを閉じて成功モーダル表示
                setModalFlg(false);
                setSuccessModalFlg(true);
                setRegistSuccessFlg(true);
                
            }else{
                setRegistSuccessFlg(false);
                let messageList = [];
                messageList.push(MODAL_BODY_REGIST_ERROR);
                messageList.push(res.data.result.errorMessage);
                messageList.push(MODAL_BODY_REGIST_ERROR_INPUT);
                setErrorMessage(messageList);
            }
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

    /**
     * TemplateContainer.jsxのボディ部に入れ込むエレメント生成する
     * @returns テンプレート内に挿入するボディエレメント
     */
    const body = () =>{
        return <div>
                    {!registSuccessFlg ?
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
                            openFlg={successModalFlg}
                            modalStyle="userRegistModal"
                            onRequestClose={successModalClose}
                            modalTitle={registSuccessFlg ? MODAL_TITLE_REGIST_SUCCESS : MODAL_TITLE_REGIST_ERROR}
                            modalBody={registSuccessFlg ? registSuccessModalBody : errorMessage}
                            btnTitle1={registSuccessFlg ? MODAL_BTN_NAME_LOGIN : MODAL_BTN_NAME_USER_INPUT}
                            onClick1 = {successModalClose}
                    />
                    }
                    <div className="userRegistContentArea">
                        <ErrorMessage
                            errorMessage={errorMessage}
                        />
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
            title={SIDE_USER_REGIST} 
        　  body={body()}
            wigetList={wigetList}
        />
        
    )
}