import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'
const { persistAtom } = recoilPersist()
export const userRegistState = atom({
  key: 'userRegist',
  default: {},
  effects_UNSTABLE: [persistAtom]
})