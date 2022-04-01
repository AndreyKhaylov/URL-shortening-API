import { createSlice } from "@reduxjs/toolkit";

import { createShortLink } from "./ActionCreators";

import { IResponse } from "./ActionCreators";

interface ILinkSlice {
    links: string[];
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
            const { ok, result } = action.payload;
            if(ok) {
                state.links.push(result);
                state.loading = 'idle'
            } else {
                state.loading = 'error'
            }
        },
    },
})

export default linkSlice.reducer;