import React from 'react';
import DropdownList from 'react-widgets/lib/DropdownList';

export const renderDropdownList = ({ input, data, valueField, textField, defaultValue, ...rest })=>
  <DropdownList 
    data={data}
    valueField={valueField}
    textField={textField}
    onChange={input.onChange}
    defaultValue={defaultValue}
    {...input}
    {...rest} />


export const renderField = ({
      input,
      label,
      type,
      placeholder,
      meta: { touched, error }
    }) => (
      <div>
        <label>{label}</label>
        <div className="input">
          <p className={((error && touched && "zero-button-margin")||"")}>
            <input className={((error && touched && "zero-button-margin")||"")} {...input} placeholder={placeholder} type={type} />
          </p>
          {touched &&
            (error && <p className="error"><span>{error}</span></p>)}
        </div>
      </div>
    )
    