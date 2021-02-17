import {
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
  ADD_PRODUCT_FAILURE,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  MODAL_CATEGORY_ID_CHANGED,
  MODAL_COLS_CHANGED,
  MODAL_DESCRIPTION_CHANGED,
  MODAL_IMAGE_URL_CHANGED,
  MODAL_PRICE_CHANGED,
  MODAL_PRODUCT_TYPE_CHANGED,
  MODAL_TITLE_CHANGED,
  MODAL_FILE_CHANGED,
  CLEAR_ALL,
  FETCH_PRODUCT_BY_ID_REQUEST,
  FETCH_PRODUCT_BY_ID_SUCCESS,
  FETCH_PRODUCT_BY_ID_FAILURE,
  EDIT_PRODUCT_REQUEST,
  EDIT_PRODUCT_SUCCESS,
  EDIT_PRODUCT_FAILURE,
  SET_OLD_PRICE
} from './admin.constants';
import { startFetchProductByCriteria } from '../products/products.actions';
import { changeInput } from '../search/search.actions';

export const deleteProduct = (productId, token, input) => async (dispatch) => {
  dispatch(deleteProductRequest());
  try {
    const response = await fetch(`http://localhost:5000/products/${productId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ productId, token })
    });
    const data = await response.json();
    if (data.error) {
      return dispatch(deleteProductFailure(new Error(data.error)));
    }
    dispatch(deleteProductSuccess());
    dispatch(startFetchProductByCriteria(input));
  } catch (error) {
    dispatch(deleteProductFailure(error));
  }
};

export const deleteProductRequest = () => ({
  type: DELETE_PRODUCT_REQUEST
});

export const deleteProductSuccess = () => ({
  type: DELETE_PRODUCT_SUCCESS
});

export const deleteProductFailure = (error) => ({
  type: DELETE_PRODUCT_FAILURE,
  payload: error.message
});

export const addProduct = (productData, token) => async (dispatch) => {
  productData.oldPrice = 0;
  dispatch(addProductRequest());
  try {
    const formData = new FormData();
    formData.append('key', "798a24e7fe5a8ad72df54eaa8b47a87d");
    formData.append('image', productData.file);
    const responseFromImgBB = await fetch('https://api.imgbb.com/1/upload', {
      method: 'POST',
      body: formData
    });
    const jsonFromImgBB = await responseFromImgBB.json();
    const imageUrl = jsonFromImgBB.data.url;
    dispatch(changeModalFile(null));
    const responseFromBackend = await fetch('http://localhost:5000/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ productData: { ...productData, imageUrl }, token })
    });
    const data = await responseFromBackend.json();
    if (data.error) {
      return dispatch(addProductFailure(new Error(data.error)));
    }
    dispatch(addProductSuccess());
    dispatch(changeInput(productData.title));
  } catch (error) {
    dispatch(addProductFailure(error));
  }
}

export const addProductRequest = () => ({
  type: ADD_PRODUCT_REQUEST
});

export const addProductSuccess = () => ({
  type: ADD_PRODUCT_SUCCESS
});

export const addProductFailure = (error) => ({
  type: ADD_PRODUCT_FAILURE,
  payload: error.message
});

export const changeModalCategoryId = (categoryId) => ({
  type: MODAL_CATEGORY_ID_CHANGED,
  payload: categoryId
}); 

export const changeModalTitle = (title) => ({
  type: MODAL_TITLE_CHANGED,
  payload: title
});

export const changeModalCols = (cols) => ({
  type: MODAL_COLS_CHANGED,
  payload: cols
});

export const changeModalDescription = (description) => ({
  type: MODAL_DESCRIPTION_CHANGED,
  payload: description
});

export const changeModalImageUrl = (imageUrl) => ({
  type: MODAL_IMAGE_URL_CHANGED,
  payload: imageUrl
});

export const changeModalPrice = (price) => ({
  type: MODAL_PRICE_CHANGED,
  payload: price
});

export const changeModalProductType = (productType) => ({
  type: MODAL_PRODUCT_TYPE_CHANGED,
  payload: productType
});

export const changeModalFile = (file) => ({
  type: MODAL_FILE_CHANGED,
  payload: file
});

export const clearAll = () => ({
  type: CLEAR_ALL
});

export const fetchProductById = (productId) => async (dispatch) => {
  dispatch(fetchProductByIdRequest());
  try {
    const response = await fetch(`http://localhost:5000/products/${productId}`);
    const data = await response.json();
    if (data.error) {
      return dispatch(fetchProductByIdFailure(new Error(data.error)));
    }
    dispatch(fetchProductByIdSuccess(data.product));
    dispatch(setOldPrice(data.product.price));
  } catch (error) {
    dispatch(fetchProductByIdFailure(error));
  }
}

export const fetchProductByIdRequest = () => ({
  type: FETCH_PRODUCT_BY_ID_REQUEST
});

export const fetchProductByIdSuccess = (product) => ({
  type: FETCH_PRODUCT_BY_ID_SUCCESS,
  payload: product
});

export const fetchProductByIdFailure = (error) => ({
  type: FETCH_PRODUCT_BY_ID_FAILURE,
  payload: error.message
});

export const editProduct = (productData, token) => async (dispatch) => {
  dispatch(editProductRequest());
  try {
    let imageUrl = null;
    if (productData.file) {
      const formData = new FormData();
      formData.append('key', "798a24e7fe5a8ad72df54eaa8b47a87d");
      formData.append('image', productData.file);
      const responseFromImgBB = await fetch('https://api.imgbb.com/1/upload', {
        method: 'POST',
        body: formData
      });
      const jsonFromImgBB = await responseFromImgBB.json();
      imageUrl = jsonFromImgBB.data.url;
    }
    const response = await fetch(`http://localhost:5000/products/${productData.productId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ productData: { ...productData, imageUrl }, token })
    });
    const data = await response.json();
    if (data.error) {
      return dispatch(editProductFailure(new Error(data.error)));
    }
    dispatch(editProductSuccess());
    dispatch(changeInput(productData.title));
    dispatch(startFetchProductByCriteria(productData.title));
  } catch (error) {
    dispatch(editProductFailure(error));
  }
}

export const editProductRequest = () => ({
  type: EDIT_PRODUCT_REQUEST
});

export const editProductSuccess = () => ({
  type: EDIT_PRODUCT_SUCCESS
});

export const editProductFailure = (error) => ({
  type: EDIT_PRODUCT_FAILURE,
  payload: error.message
})

export const setOldPrice = (oldPrice) => ({
  type: SET_OLD_PRICE,
  payload: oldPrice
});