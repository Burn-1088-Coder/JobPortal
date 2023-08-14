import customFetch from "../../utils/axios";
import { clearAllJobState } from "../AllJobs/allJobSlice";
import { clearValues } from "../Job/jobSlice";
import { logoutUser } from "./userSlice";


export const registerUserThunk = async(url,user,thunkAPI)=>{
 try {
   const resp = await customFetch.post(url, user);
   return resp.data;
 } catch (error) {
   return thunkAPI.rejectWithValue(error.response.data.msg);
 }
}


export const loginUserThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, user);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const updateUserThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customFetch.patch(url, user);
    return resp.data;
  } catch (error) {
    // console.log(error.response);
    if (error.response.status === 401) {
      thunkAPI.dispatch(logoutUser());
      return thunkAPI.rejectWithValue("Unauthorized! Logging Out...");
    }
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const clearStoreThunk = async (message,thunkAPI)=>{
  try {
    // logout User
    thunkAPI.dispatch(logoutUser(message))
    // clear jobs value
    thunkAPI.dispatch(clearAllJobState())
    // clear job input values
    thunkAPI.dispatch(clearValues())
    return Promise.resolve()
  } catch (error) {
    return Promise.reject()
  }
}