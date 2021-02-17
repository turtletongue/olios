import {
  DELETE_PRODUCT_FAILURE,
  ADD_PRODUCT_FAILURE,
  MODAL_CATEGORY_ID_CHANGED,
  MODAL_COLS_CHANGED,
  MODAL_DESCRIPTION_CHANGED,
  MODAL_IMAGE_URL_CHANGED,
  MODAL_PRICE_CHANGED,
  MODAL_PRODUCT_TYPE_CHANGED,
  MODAL_TITLE_CHANGED,
  MODAL_FILE_CHANGED,
  CLEAR_ALL,
  FETCH_PRODUCT_BY_ID_SUCCESS,
  FETCH_PRODUCT_BY_ID_FAILURE,
  SET_OLD_PRICE
} from './admin.constants';

const initialState = {
  productId: '',
  title: '',
  categoryId: '',
  cols: '',
  description: '',
  imageUrl: '',
  price: '',
  oldPrice: '',
  productType: '',
  file: null,
  errorMessage: null
};

const adminReducer = (state=initialState, action={}) => {
  switch (action.type) {
    case DELETE_PRODUCT_FAILURE:
    case ADD_PRODUCT_FAILURE:
    case FETCH_PRODUCT_BY_ID_FAILURE:
      return { ...state, errorMessage: action.payload };
    case MODAL_PRODUCT_TYPE_CHANGED:
      return { ...state, productType: action.payload };
    case MODAL_TITLE_CHANGED:
      return { ...state, title: action.payload };
    case MODAL_CATEGORY_ID_CHANGED:
      return { ...state, categoryId: action.payload };
    case MODAL_DESCRIPTION_CHANGED:
      return { ...state, description: action.payload };
    case MODAL_IMAGE_URL_CHANGED:
      return { ...state, imageUrl: action.payload };
    case MODAL_PRICE_CHANGED:
      return { ...state, price: action.payload };
    case MODAL_COLS_CHANGED:
      return { ...state, cols: action.payload };
    case MODAL_FILE_CHANGED:
      return { ...state, file: action.payload };
    case CLEAR_ALL:
      return initialState;
    case SET_OLD_PRICE:
      return { ...state, oldPrice: action.payload };
    case FETCH_PRODUCT_BY_ID_SUCCESS:
      return {
        ...state,
        productId: action.payload.id,
        title: action.payload.title,
        price: action.payload.price,
        cols: action.payload.cols,
        imageUrl: action.payload.imageUrl,
        description: action.payload.description,
        categoryId: action.payload.categoryId,
        productType: action.payload.productType,
        errorMessage: null
      };
    default:
      return state;
  }
}

export default adminReducer;