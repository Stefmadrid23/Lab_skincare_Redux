import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type UserProfileState = {
  name: string;
  email: string;
};

const initialState: UserProfileState = {
  name: '',
  email: '',
};

const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<UserProfileState>) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
  },
});

export const { setProfile } = userProfileSlice.actions;
export default userProfileSlice.reducer;