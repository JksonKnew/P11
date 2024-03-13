
export const login = (user) => ({
    type: 'LOGIN',
    payload: user,
  });
  
  export const logout = () => ({
    type: 'LOGOUT',
  });
  
  export const startEditProfile = () => ({
    type: 'START_EDIT_PROFILE',
  });
  
  export const finishEditProfile = (updatedProfile) => ({
    type: 'FINISH_EDIT_PROFILE',
    payload: updatedProfile,
  });
  