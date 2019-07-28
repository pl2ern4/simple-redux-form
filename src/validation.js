import _ from 'lodash';

export const required = value => (value || typeof value === 'string' ? undefined : 'Required')

export const isDropDownValid = value => {
    debugger;
    return (value && typeof value === 'object' && value.value ? undefined : 'Required')
}

export const maxLength15 = value =>
  value && value.length > 15 ? `Must be 15 characters or less` : undefined;

export const minLength2 = value =>
  value && value.length < 2 ? `Must be 2 characters or more` : undefined; 

export const isString = value =>
  value && /^[a-zA-Z ]*$/.test(value) ? undefined : 'Must be alphabetic only';   

export const isNumeric = value =>
    value && Number(value)==='NaN'? 'Must be numeric only': undefined;

export const minLength8 = value =>
    value && value.length < 8 ? `Must be of length 8 or more` : undefined;
