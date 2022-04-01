import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

import { API_BASE_URL } from '../../config';

interface IResult {
    code: string;
    short_link: string;
    full_short_link: string;
    short_link2: string;
    full_short_link2: string;
    share_link: string;
    full_share_link: string;
    original_link: string;
};

export interface IResponse {
    ok: boolean;
    result: IResult;
};

export const createShortLink = createAsyncThunk(
    'links/createShortLink',
    async (url: string, thunkAPI) => {
        try {
            const response = await axios.post<IResponse>(API_BASE_URL + url)
            return response;
        } catch(e) {
            thunkAPI.rejectWithValue(e)
        }
    }
); 