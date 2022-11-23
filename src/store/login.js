import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'
const { persistAtom } = recoilPersist()
export const userState = atom({
  key: 'userInfo',
  default: {
    userId: "test",
    userName: 'test',
    password: 'test',
    roleId:'1',
    mailAddress:'test@aa.jp'
  },
  effects_UNSTABLE: [persistAtom]
})