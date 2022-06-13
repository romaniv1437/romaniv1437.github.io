import {IProduct} from "../../models/IProduct";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getProductsForMainPage} from "./ActionCreators";


interface ProductState {
    products: IProduct[],
    isLoading: boolean,
    error: string,
    currentPage: number,
    limit: number
}

const initialState: ProductState = {
    products: [],
    isLoading: false,
    error: '',
    currentPage: 1,
    limit: 8
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setCurrentPageNext(state, action: PayloadAction<number>) {
            state.currentPage += action.payload
        },
        setCurrentPagePrev(state, action: PayloadAction<number>) {
            state.currentPage -= action.payload
        }
    },
    extraReducers: {
        [getProductsForMainPage.fulfilled.type]: (state, action: PayloadAction<IProduct[]>) => {
            state.isLoading = false;
            state.error = '';
            state.products = action.payload
        },
        [getProductsForMainPage.pending.type]: (state) => {
            state.isLoading = true
        },
        [getProductsForMainPage.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload
        }
    }
})

export default productSlice.reducer