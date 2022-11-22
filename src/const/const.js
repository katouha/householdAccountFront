//API接続URL
export const REGIST_USER_API = "http://localhost:8080/householdAccount/user/registUser";
export const PASSWORD_CHANGE_API = "http://localhost:8080/householdAccount/user/updateUser";
export const LOGIN_API = "http://localhost:8080/householdAccount/user/login";


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
export const PASS_LOGIN = "/login";
export const PASS_USER_REGIST = "/user/regist";
export const PASS_USER_FORGET_PASSWORD = "/user/forgetPassword";
export const PASS_USER_INFO_CHANGE = "/user/userInfoChange";
export const PASS_HOUSEHOLD_REGIST = "/householdRegist";
export const PASS_HOUSEHOLD_SEARCH = "/householdSearch";
export const PASS_HOUSEHOLD_GRAPH = "/householdGraph";