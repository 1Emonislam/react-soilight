const intiState = {
    category: [],
    subCategory: [],
    insideSubCategory: [],
    packType: [],
    servingSize: [],
    loading: false,
    message: '',
    error: '',
}
export const CATEGORY_STORE = 'CATEGORY_STORE'
export const SUB_CATEGORY_STORE = 'SUB_CATEGORY_STORE'
export const INSIDE_SUB_CATEGORY_STORE = 'INSIDE_SUB_CATEGORY_STORE'
export const PACK_TYPE = 'PACK_TYPE'
export const SERVING_SIZE = 'SERVING_SIZE'
export const PROGRESS_CATEGORIES = 'PROGRESS_CATEGORIES'
export const categoriesReducer = (state = intiState, action) => {
    const { payload, type } = action;
    if (type === CATEGORY_STORE) {
        return {
            ...state,
            category: payload.category,
        }
    }
    if (type === SUB_CATEGORY_STORE) {
        return {
            ...state,
            subCategory: payload.subCategory,
        }
    }
    if (type === INSIDE_SUB_CATEGORY_STORE) {
        return {
            ...state,
            insideSubCategory: payload.insideSubCategory,
        }
    }
    if (type === PACK_TYPE) {
        return {
            ...state,
            packType: payload.packType,
        }
    }
    if (type === SERVING_SIZE) {
        return {
            ...state,
            servingSize: payload.servingSize,
        }
    }
    if (type === PROGRESS_CATEGORIES) {
        return {
            ...state,
            loading: payload.loading,
        }
    }
    return state

}