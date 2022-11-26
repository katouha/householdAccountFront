import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'
const { persistAtom } = recoilPersist()
export const userRegistState = atom({
  key: 'userRegist',
  default: {
    userId: "",
    userName: '',
    password: '',
    mailAddress:'',
    gender:''
  },
  effects_UNSTABLE: [persistAtom]
})