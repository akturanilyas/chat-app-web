/* eslint max-len: off */
export const emailRegex
  = /^[\\a-z0-9!#$%&'*+/=?^_`{|}~^-]+(?:\.[\\a-z0-9!#$%&'*+/=?^_`{|}~^-]+)*@(?:[a-z0-9-]+\.)+[a-z]{2,}/;

export const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,128}$/;

export const websiteRegex
  = /^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})$/;
