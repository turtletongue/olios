import { LOADING_STARTED, LOADING_FINISHED } from './loading.constants';

export const startLoading = () => ({
  type: LOADING_STARTED
});

export const finishLoading = () => ({
  type: LOADING_FINISHED
});