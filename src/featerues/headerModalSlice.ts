import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

type ModalStateType = 'open' | 'close'

interface ModalState {
  modalStatus: ModalStateType
}

const initialState: ModalState = {
  modalStatus: 'close',
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModalStatus: (state, action: PayloadAction<ModalStateType>) => {
      state.modalStatus = action.payload
    },
  },
})

export const { setModalStatus } = modalSlice.actions
export default modalSlice.reducer