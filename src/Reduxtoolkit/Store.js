import { configureStore } from '@reduxjs/toolkit'
import CVSlice from "../Reduxtoolkit/Reducer"

const store = configureStore({
  reducer: {
    main:CVSlice
  }
})

export default store