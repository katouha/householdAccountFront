//API接続URL
export const REGIST_USER_API = "http://localhost:8080/householdAccount/user/registUser";
export const PASSWORD_CHANGE_API = "http://localhost:8080/householdAccount/user/updateUser";
export const LOGIN_API = "http://localhost:8080/householdAccount/user/login";

//APIリターンコード
export const API_RESULT_OK = "0";


//サイドウィジェッドラベル名
export const SIDE_HOUSEHOLD_REGIST = "家計簿登録";
export const SIDE_HOUSEHOLD_SEARCH = "家計簿閲覧";
export const SIDE_HOUSEHOLD_GRAPH = "家計簿グラフ";
export const SIDE_USER_INFO_CHANGE = "ユーザ情報変更";
export const SIDE_FORGET_PASSOWRD = "パスワード再発行";
export const SIDE_USER_REGIST = "ユーザ登録";
export const SIDE_LOGOUT = "ログアウト";
export const SIDE_LOGIN = "ログアウト";

//画面遷移先
export const PASS_LOGIN = "/household_account/login";
export const PASS_USER_REGIST = "/household_account/user/regist";
export const PASS_USER_REGIST_CONF = "/household_account/user/registConf";
export const PASS_USER_FORGET_PASSWORD = "/household_account/user/forgetPassword";
export const PASS_USER_INFO_CHANGE = "/household_account/user/userInfoChange";
export const PASS_HOUSEHOLD_REGIST = "/household_account/householdRegist";
export const PASS_HOUSEHOLD_SEARCH = "/household_account/householdSearch";
export const PASS_HOUSEHOLD_GRAPH = "/household_account/householdGraph";

//モーダルタイトル
export const MODAL_TITLE_REGIST = "登録確認";
export const MODAL_TITLE_REGIST_SUCCESS = "登録完了";
export const MODAL_TITLE_REGIST_ERROR = "登録失敗";


//モーダルボディ
export const MODAL_BODY_REGIST = "登録しますか？";
export const MODAL_BODY_REGIST_SUCCESS = "登録完了いたしました。";
export const MODAL_BODY_NEXT_LOGIN = "ログイン画面へ戻ります。";
export const MODAL_BODY_REGIST_ERROR = "登録失敗いたしました。";
export const MODAL_BODY_REGIST_ERROR_INPUT = "入力からやり直してください。";

//モーダルボタン名
export const MODAL_BTN_NAME_CANCEL = "キャンセル";
export const MODAL_BTN_NAME_OK = "OK";
export const MODAL_BTN_NAME_LOGIN = "ログインへ戻る";
export const MODAL_BTN_NAME_USER_INPUT = "ユーザ情報入力へ戻る";