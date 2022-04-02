import { createSlice } from "@reduxjs/toolkit";
import { IResponse } from "../../types/IResponce";
import { RootState } from "../configStore";

import { createShortLink } from "./ActionCreators";

interface ILinkSlice {
    links: any[];
    loading: string;
}

const initialState: ILinkSlice = {
    links: [],
    loading: 'idle',
}

export const linkSlice = createSlice({
    name: 'links',
    initialState,
    reducers: {},
    extraReducers: {
        [createShortLink.rejected.type]: (state) => {
            state.loading = 'rejected'
        },
        [createShortLink.pending.type]: (state) => {
            state.loading = 'loading'
        },
        [createShortLink.fulfilled.type]: (state, action) => {
            const { ok, result }: IResponse = action.payload;
            if(ok) {
                state.links.push(result);
                state.loading = 'idle'
            } else {
                state.loading = 'error'
            }
        },
    },
})

export const selectLinks = (state: RootState) => state.links.links;
export const selectLoading = (state: RootState) => state.links.loading;

export default linkSlice.reducer;