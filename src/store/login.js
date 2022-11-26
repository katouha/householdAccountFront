import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'
const { persistAtom } = recoilPersist()
export const userState = atom({
  key: 'userInfo',
  default: {},
  effects_UNSTABLE: [persistAtom]
})