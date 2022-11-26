import React,{useState} from "react";
import { useNavigate } from 'react-router-dom';
import './../../resources/css/template.css';
import './../../resources/css/userRegist.css'
import { TemplateContainer } from "./TemplateContainer";
import { FiLogIn } from "react-icons/fi";
import { PASS_LOGIN, PASS_USER_REGIST_CONF, SIDE_LOGIN, SIDE_USER_REGIST } from "../../const/const";
import { TitleGroup } from "../atoms/TitleGroup";
import { DynamicTable } from "../molecules/DynamicTable";
import { Button } from "../atoms/Button";
import { DualRadioBtn } from "../molecules/DualRadioBtn"; 
import { ErrorMessage } from "../molecules/ErrorMessage";
import { useRecoilState, useRecoilValue } from 'recoil';
import { userRegistState } from '../../store/userRegist';

export const UserRegistContainer = (props) =>{

    const navigate = useNavigate();

    const [userName,setUserName] = useState("");
    const [loginId,setloginId] = useState("");
    const [password,setPassword] = useState("");
    const [passwordConf,setPasswordConf] = useState("");
    const [mailAddress,setMailAddress] = useState("");
    const [mailAddressConf,setMailAddressConf] = useState("");
    const [gender,setGender] = useState("");
    const [errorMessage,setErrorMessage] = useState([]);
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
     * 入力値をstateにセット
     * @param {*入力値} e 
     */
     const handleChange = (e) => {
        switch(e.target.id){
            case 'userName':
                setUserName(e.target.value);
                break;
            case 'loginId':
                setloginId(e.target.value);
                break;
            case 'password':
                setPassword(e.target.value);
                break;
            case 'passwordConf':
                setPasswordConf(e.target.value);
                break;
            case 'mailAddress':
                setMailAddress(e.target.value);
                break;
            case 'mailAddressConf':
                setMailAddressConf(e.target.value);
                break;
            default:
                setGender(e.target.value);
                break;
            
        }
    }

    /**
     * バリデーションチェックかからなければ画面遷移
     * @returns なし
     */
    const onClickNextConfirm = () => {
        if(validation()){
            return;
        }
        //storeに情報保持
        let userRegistInfo = {
            userName:userName,
            userId:loginId,
            password:passwordConf,
            mailAddress:mailAddressConf,
            gender:gender,
        }
        setUserRegist(userRegistInfo);
        //入力内容確認画面に遷移
        navigate(PASS_USER_REGIST_CONF);
    }

     /**
     * 入力値バリデーションチェック
     * @returns エラーメッセージリスト
     */
      const validation = () => {
        let validationFlg = false;
        const messageList = [];
        if(!userName){
            messageList.push("ユーザ名を入力してください");
            validationFlg = true;
        }else if(userName.length > 100){
            messageList.push("ユーザ名は100文字以内で入力してください");
            validationFlg = true;
        }
        if(!loginId){
            messageList.push("ログインIDを入力してください");
            validationFlg = true;
        }else if(loginId.length > 100){
            messageList.push("ログインIDは100文字以内で入力してください");
            validationFlg = true;
        }
        if(!password){
            messageList.push("パスワードを入力してください");
            validationFlg = true;
        }else if(password.length < 5 || password.length > 100){
            messageList.push("パスワードは4文字以上100文字以内で入力してください");
            validationFlg = true;
        }
        if(!passwordConf){
            messageList.push("パスワード（確認）を入力してください");
            validationFlg = true;
        }else if(passwordConf.length < 5 || passwordConf.length > 100){
            messageList.push("パスワード（確認）は4文字以上100文字以内で入力してください");
            validationFlg = true;
        }else if(password !== passwordConf){
            messageList.push("パスワードとパスワード（確認）は同じ値を入力してください");
            validationFlg = true;
        }
        var addressPattern = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/;
        if(!mailAddress){
            messageList.push("メールアドレスを入力してください");
            validationFlg = true;
        }else if(mailAddress.length > 400){
            messageList.push("メールアドレスは400文字以内で入力してください");
            validationFlg = true;
        }else if(!addressPattern.test(mailAddress)){
            messageList.push("メールアドレスの形式が正しくありません。");
            validationFlg = true;
        }
        if(!mailAddressConf){
            messageList.push("メールアドレス（確認）を入力してください");
            validationFlg = true;
        }else if(mailAddressConf.length > 400){
            messageList.push("メールアドレス（確認）は400文字以内で入力してください");
            validationFlg = true;
        }else if(!addressPattern.test(mailAddressConf)){
            messageList.push("メールアドレス（確認）の形式が正しくありません。");
            validationFlg = true;
        }else if(mailAddress !== mailAddressConf){
            messageList.push("メールアドレスとメールアドレス（確認）は同じ値を入力してください");
            validationFlg = true;
        }
        if(!gender){
            messageList.push("性別を選択してください");
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

    const radioList = [
        {value:"1",labelValue:"男性",id:"male"},
        {value:"2",labelValue:"女性",id:"female"},
        {value:"99",labelValue:"その他",id:"athor"}
    ];


    const tableList = [
        [<td className="userRegistTd1">ユーザ名</td>,<td className="userRegistTd2"><input type="text" className={"userRegistInputForm"} id="userName" onChange={handleChange}/></td>],
        [<td className="userRegistTd1">ログインID</td>,<td className="userRegistTd2"><input type="text" className={"userRegistInputForm"} id="loginId" onChange={handleChange}/></td>],
        [<td className="userRegistTd1">パスワード</td>,<td className="userRegistTd2"><input type="password" className={"userRegistInputForm"} id="password" onChange={handleChange}/></td>],
        [<td className="userRegistTd1">パスワード確認</td>,<td className="userRegistTd2"><input type="password" className={"userRegistInputForm"} id="passwordConf" onChange={handleChange}/></td>],
        [<td className="userRegistTd1">メールアドレス</td>,<td className="userRegistTd2"><input type="text" className={"userRegistInputForm"} id="mailAddress" onChange={handleChange}/></td>],
        [<td className="userRegistTd1">メールアドレス確認</td>,<td className="userRegistTd2"><input type="text" className={"userRegistInputForm"} id="mailAddressConf" onChange={handleChange}/></td>],
        [<td className="userRegistTd1">性別</td>,<td className="userRegistTd2"><DualRadioBtn radioList={radioList} radioAreaStyle={"radioArea"} radioSizeStyle={"radioSizeStyle"} radioStyle={"radioStyle"} name="gender" className={"userRegistRadioForm"} onChange={handleChange}/></td>]
    ]

    /**
     * TemplateContainer.jsxのボディ部に入れ込むエレメント生成する
     * @returns テンプレート内に挿入するボディエレメント
     */
    const body = () =>{
        return <div>
                    <div className="userRegistContentArea">
                        <ErrorMessage
                            errorMessage={errorMessage}
                        />
                        <TitleGroup
                            className="userRegistGroupTitle"
                            titleName={"ユーザ情報入力"}
                        />
                        <DynamicTable
                            tableStyle="userRegistTableStyle"
                            trStyle="userRegistTrStyle"
                            tdStyle="userRegistTdStyle"
                            tableList={tableList}
                        />
                        <div className="registBtnArea">
                            <Button
                                onClick={onClickNextConfirm}
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