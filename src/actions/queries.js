import * as api from '../api';
export const sendquery = (pdata) => async (dispatch) => {
  try {
    console.log('Actions');
    //const { data } = await api.sendMail(pdata);
    dispatch({ type: 'SAVE', payload: pdata });
  } catch (error) {
    console.log(error);
  }
};
