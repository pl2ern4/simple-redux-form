export const required = value => (value || typeof value === 'string' ? undefined : 'Required')

export const maxLength15 = value =>
  value && value.length > 15 ? `Must be 15 characters or less` : undefined;

export const minLength2 = value =>
  value && value.length < 2 ? `Must be 2 characters or more` : undefined; 

export const isString = value =>
  value && /^[a-zA-Z ]*$/.test(value) ? undefined : 'Must be alphabetic only';   

export const isNumeric = value => value && !(/^[0-9]+$/).test(value)? 'Must be numeric only': undefined;
    
export const minLength8 = value =>
    value && value.length < 8 ? `Must be of length 8 or more` : undefined;
