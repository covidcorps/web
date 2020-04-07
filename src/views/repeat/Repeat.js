import React from 'react';

const RepeatedFormControl = ({ as, fieldGroupName, handleUpdate, values, placeholder }) => {
  const TagName = as;
  return (
    <span>
      {values.map((v, idx) => (
        <TagName 
          value={v} 
          placeholder={placeholder} 
          handleUpdate={(field, value) => {
            values[idx][field] = value;
            handleUpdate(fieldGroupName, values);
          }} 
        />)
      )}
    </span>
  );
}

export default RepeatedFormControl;