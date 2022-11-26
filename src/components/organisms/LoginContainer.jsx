import React,{useState} from "react";
import { Button } from "../atoms/Button";
import { InputForm } from "../molecules/InputForm";
import './../../resources/css/login.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import  {API_RESULT_OK, LOGIN_API} from './../../const/const.js';
import { Link } from "../atoms/Link";
import { PASS_HOUSEHOLD_REGIST,PASS_USER_REGIST,PASS_USER_FORGET_PASSWORD } from "./../../const/const.js";
import { useRecoilState} from 'recoil';
import { userState } from '../../store/login';
import { userRegistState } from '../../store/userRegist';
import { ErrorMessage } from "../molecules/ErrorMessage";
import { useEffect } from "react";
export const LoginContainer = (props) =>{

    const [id,setId] = useState("");
    const [password,setPassword] = useState("");
    const [errorMessage,setErrorMessage] = useState([]);
    //　読み書き両方
    const [userInfo, setUserInfo] = useRecoilState(userState);
    const [userRegist, setUserRegist] = useRecoilState(userRegistState);
    const navigate = useNavigate();

    useEffect(() =>{
        setUserInfo({});
        setUserRegist({});
    },[])

    /**
     * 入力値をstateにセット
     * @param {*入力値} e 
     */
    const handleChange = (e) => {
        switch(e.target.id){
            case 'loginInputId':
                setId(e.target.value);
                break;
            case 'loginInputPassword':
                setPassword(e.target.value);
                break;
        }
    }

    /**
     * ログインAPI呼び出し
     */
    const login = async() => {
        //バリデーションチェック
        let validationCheckFlg = validation();
        if(!validationCheckFlg){
            //loginAPIを呼ぶ
            await axios.post(LOGIN_API,{userId:id,password:password})
            .then(res => {
                let apiResult = res.data.result.returnCd;
                //api成功
                if(apiResult === API_RESULT_OK){
                    //何らかの形でログイン情報を保持する(いったんはブラウザストレージ)
                    setUserInfo(userInfoConvert(res.data.result));
                    //家計簿登録画面遷移
                    navigate(PASS_HOUSEHOLD_REGIST);
                    
                }else{
                    let messageList = [];
                    messageList.push(res.data.result.errorMessage);
                    setErrorMessage(messageList);
                }
            })
        }
    }

    const userInfoConvert = (apiResData) => {
        let userObj = {
            userId:apiResData.userId,
            userName:apiResData.userName,
            roleId:apiResData.roleId,
            password:apiResData.password,
            mailAddress:apiResData.mailAddress,
            genderType:apiResData.genderType,
        }
        return userObj;
    }

    /**
     * 入力値バリデーションチェック
     * @returns エラーメッセージリスト
     */
    const validation = () => {
        let validationFlg = false;
        const messageList = [];
        if(!id){
            messageList.push("ユーザーIDを入力してください");
            validationFlg = true;
        }
        if(!password){
            messageList.push("パスワードを入力してください");
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
     * 新規ユーザー登録画面遷移処理
     */
    const onClickUserRegist = () => {
        navigate(PASS_USER_REGIST);
    }

    /**
     * パスワード再設定画面遷移処理
     */
    const onClickPasswordIssue = () => {
        navigate(PASS_USER_FORGET_PASSWORD);
    }

    //以下コンポーネントエレメント作成
    //---------------------------------------------------------------------------

    /**
     * ユーザID入力フォームのエレメント生成
     * @returns ユーザID入力フォームのエレメント
     */
    const userIdForm = () => {
        return <div className={"formContent"}>
                    <InputForm
                        formAreaClass={"LoginFormArea"}
                        labelValue={"ユーザーID"}
                        labelId={"loginLabelId"}
                        labelClassName={"loginLabel"}
                        inputId={"loginInputId"}
                        inputValue={id}
                        inputClassName={"loginInput"}
                        placeholder={"IDを入力"}
                        type={"text"}
                        onChange={handleChange}
                    />
                </div>
    }

    /**
     * パスワード入力フォームのエレメント生成
     * @returns パスワード入力フォームのエレメント
     */
    const passwordForm = () => {
        return <div className={"formContent"}>
                    <InputForm
                        formAreaClass={"LoginFormArea"}
                        labelValue={"パスワード"}
                        labelId={"loginLabelPassword"}
                        labelClassName={"loginLabel"}
                        inputId={"loginInputPassword"}
                        inputValue={password}
                        inputClassName={"loginInput"}
                        placeholder={"パスワードを入力"}
                        type={"password"}
                        onChange={handleChange}
                    />
                </div>
    }

    /**
     * ログインボタンエリアのエレメント生成
     * @returns ログインボタンエリアのエレメント
     */
    const loginBtnArea = () => {
        return <div>
                    <Button
                        value={"ログイン"}
                        className={"loginBtn"}
                        onClick={login}
                    />
                </div>
    }

    /**
     * ユーザ登録とパスワード初期化リンクエリアエレメント生成
     * @returns ユーザ登録とパスワード初期化リンクエリアエレメント
     */
    const registChangePassArea = () => {
        return <div>
                    <Link 
                        value={"新規ユーザ登録"}
                        onClick={onClickUserRegist}
                        href={""}
                        className={"loginLink"}
                    />
                    <Link 
                        value={"パスワードをお忘れの方"}
                        onClick={onClickPasswordIssue}
                        href={""}
                        className={"loginLink"}
                    />
                </div>
    }
    //コンポーネントエレメント作成ここまで
    //---------------------------------------------------------------------------

    return(
        <div className={"loginContent"}>
            <div className={"loginBase"}>
                <div className={"loginTitle"}>ユーザ認証</div>
                <div className={"loginContainer"}>
                    {/* エラーメッセージ表示エリア */}
                    <ErrorMessage
                        errorMessage={errorMessage}
                    />
                    {/* ユーザ入力フォーム */}
                    {userIdForm()}
                    {/* パスワード入力フォーム */}
                    {passwordForm()}
                    {/* ログインボタンエリア */}
                    {loginBtnArea()}
                </div>
                <div className={"registChangePassArea"}>
                    {/* ユーザ登録＆パスワード初期化リンクエリア */}
                    {registChangePassArea()}
                    
                </div>
            </div>
        </div>
    )
}
