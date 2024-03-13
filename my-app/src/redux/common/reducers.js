const init = {token: ''}

const authReducer = (state = init, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state, token: action.payload.token
        }
      case 'LOGOUT':
        return {
          init
        };
      default:
        return state;
    }
  };

  
  export default authReducer;
  