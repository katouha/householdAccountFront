# householdAccountFront
家計簿アプリフロントエンド


永続化store利用方法
1.storeへの追加
store/にグローバル変数定義ファイルを追加する

2.Hookでのimport
import { useRecoilState, useRecoilValue } from 'recoil'
import { userState } from '../../store/login'

3.Hookでの利用方法
読み書き両方
const [userInfo, setUserInfo] = useRecoilState(userState);
読み取りのみ
const user = useRecoilValue(userState);
書き込みのみ
const setUser = useSetRecoilState(userState);