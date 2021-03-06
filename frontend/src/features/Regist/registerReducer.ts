import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Register {
  id: string;
  pwd: string;
  email: string;
  gender: boolean;
  atmos: string[];
  birth: { year: ''; month: ''; day: '' };
  nick: string;
  mbti: string;
  provider : boolean;
}

export const register = createSlice({
  name: 'register',
  initialState: {
    id: '',
    pwd: '',
    email: '',
    gender: true,
    atmos: [],
    birth: { year: '', month: '', day: '' },
    nick: '',
    mbti: '',
    provider: true,
  } as Register,
  reducers: {
    setId(state, action: PayloadAction<string>) {
      state.id = action.payload;
      return state;
    },
    setPwd(state, action: PayloadAction<string>) {
      state.pwd = action.payload;
    },
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    setGender(state, action: PayloadAction<any>) {
      state.gender = action.payload;
    },
    setAtmos(state, action: PayloadAction<string[]>) {
      state.atmos = action.payload;
    },
    setBirth(state, action: PayloadAction<any>) {
      state.birth.year = action.payload.year;
      state.birth.month = action.payload.month;
      state.birth.day = action.payload.day;
    },
    setNick(state, action: PayloadAction<string>) {
      state.nick = action.payload;
    },
    setMbti(state, action: PayloadAction<string>) {
      state.mbti = action.payload;
    },
    setProvider(state, action: PayloadAction<boolean>){
      state.provider = action.payload;
    },
    setInitState(state){
      state.atmos = [];
      state.birth = {year : "", month : "", day : ""};
      state.id = "";
      state.pwd = "";
      state.nick = "";
      state.provider = true;
      state.gender = true;
      state.email = "";
    }
  },
});

export const { setId, setPwd, setEmail, setGender, setAtmos, setBirth, setNick, setMbti, setProvider, setInitState } = register.actions;
export default register.reducer;
