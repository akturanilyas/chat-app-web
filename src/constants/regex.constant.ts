/* eslint max-len: off */
export const emailRegex
  = /^[\\a-z0-9!#$%&'*+/=?^_`{|}~^-]+(?:\.[\\a-z0-9!#$%&'*+/=?^_`{|}~^-]+)*@(?:[a-z0-9-]+\.)+[a-z]{2,}/;

export const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,128}$/;
