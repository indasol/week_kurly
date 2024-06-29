// 로그인 리듀서 login.js
import { createSlice } from "@reduxjs/toolkit";

const login = createSlice({
    name:'login reducer',
    initialState:{
        loginId:null,
        loginName : null,
        admin:false
    },
    reducers:{
        setLogin : ( state, action )=>{
            state.loginId = 'dasol';  // 아이디
            state.loginName = '인다솔';  // 이름
            state.admin = true;  // 관리자
        },
        setLogout : ( state, action )=>{
            state.loginId = null;  // 아이디
            state.loginName = null;  // 이름
            state.admin = false;  // 관리자
        }
    }
});

export default login.reducer;
export const {setLogin, setLogout} = login.actions;