import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

import { API_BASE_URL } from '../../config';
import { IResponse } from '../../types/IResponce';

export const createShortLink = createAsyncThunk(
    'links/createShortLink',
    async (url: string, thunkAPI) => {
        try {
            const response = await axios.post<IResponse>(API_BASE_URL + url)
            return response.data;
        } catch(e) {
            thunkAPI.rejectWithValue(e)
        }
    }
); 