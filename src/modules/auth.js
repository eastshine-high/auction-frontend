import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

/* 액션 타입 정의 */
// 액션 타입은 주로 대문자로 작성합니다.
const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form, // register, login
    key, // username, passsword, passwordConfirm
    value, //실제 바꾸려는 값
  }),
);

export const initializeForm = createAction(INITIALIZE_FORM, (form) => form); // register, login

/* 리덕스에서 관리 할 상태 정의 */
const initialState = {
  register: {
    username: '',
    password: '',
    passwordConfirm: '',
  },
  login: {
    username: '',
    password: '',
  }
};


const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: {form, key, value} }) =>
      produce(state, draft => {
        draft[form][key] = value; // 예: state.register.username을 바꾼다.
      }),
    [INITIALIZE_FORM]: (state, {payload: form}) => ({
      ...state,
      [form]: initialState[form],
    }),
  },
  initialState,
);

export default auth;
