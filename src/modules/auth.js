import { createAction, handleActions } from 'redux-actions';

/* 액션 타입 정의 */
// 액션 타입은 주로 대문자로 작성합니다.
const SAMPLE_ACTION = 'auth/SAMPLE_ACTION';

export const sampleAction = createAction(SAMPLE_ACTION);

/* 리덕스에서 관리 할 상태 정의 */
const initialState = {};

const auth = handleActions(
  {
    [SAMPLE_ACTION]: (state, action) => state
  },
  initialState
);

export default auth;
