import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showMenu: false,
  showContactForm: false,
  showTypeOFView: false,
  file: File,
  fileUrl: "",
  uploaded: false,
  uploadLoading: false,
  username: "",
  email: "",
  walletaddress: "",
  certificateID: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.showMenu = !state.showMenu;
    },
    toggleContactForm: (state) => {
      state.showContactForm = !state.showContactForm;
    },
    toggleTypeOfView: (state) => {
      state.showTypeOFView = !state.showTypeOFView;
    },
    setFile: (state, action) => {
      console.log(action.payload);
      state.file = action.payload;
    },
    setFileUrl: (state, action) => {
      state.fileUrl = action.payload;
    },
    setUploaded: (state) => {
      state.uploaded = !state.uploaded;
    },
    setUploadLoading: (state) => {
      state.uploadLoading = !state.uploadLoading;
    },
    setUserName(state, action) {
      state.username = action.payload;
    },
    setUserEmail(state, action) {
      state.email = action.payload;
    },
    setUserWalletAddress(state, action) {
      state.walletaddress = action.payload;
    },
    setUserCertificateID(state, action) {
      state.certificateID = action.payload;
    },
  },
});

export const {
  toggleMenu,
  toggleContactForm,
  toggleTypeOfView,
  setFile,
  setFileUrl,
  setUploaded,
  setUploadLoading,
  setUserName,
  setUserEmail,
  setUserWalletAddress,
  setUserCertificateID,
} = userSlice.actions;
export default userSlice.reducer;
