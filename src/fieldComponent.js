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
