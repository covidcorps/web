import React from 'react';
import { Button } from 'react-bootstrap';


const Repeat = (props) => {
  if (typeof(props.children) === 'undefined') {
    // Invalid, return error
    throw new Error('Repeat component must have children defined')
  }

  let output = [];
  for (let i = 0; i < props.times; i++) {
    output.push(props.children)
  }

  return (
    <span>
      {output}
    </span>
  );
}

const RepeatedFormControl = ({ as, fieldGroupName, handleUpdate, values, placeholder }) => {
  const handleGroupUpdate = (idx, value) => {
    values[idx] = value;
    handleUpdate(fieldGroupName, values);
  }
  // let fields = [];
  // for (let i = 0; i < fieldCount; i++) {
  //   fields.push(
  //     <TagName value={values[i]} onChange={event => handleGroupUpdate(i, event.target.value)} />
  //   );
  // }
    
  const TagName = as;
  const fields = values.map((v, idx) => <TagName value={v} placeholder={placeholder} onChange={ev => handleGroupUpdate(idx, ev.target.value)} />)
  return (
    <span>
      {fields}
    </span>
  );
}

export default RepeatedFormControl;