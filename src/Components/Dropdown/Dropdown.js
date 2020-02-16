import React,{useState} from 'react'
import './Dropdown.scss'

export default ({options,getNumbersOfInfo}) => {
 
    const [value, setValue] = useState("");
    const handleChange = event => {
      setValue(event.target.value);
      getNumbersOfInfo(event.target.value)
    };
  
    
    return (
      <div className="dropdown">
        <select className="select-css" onChange={handleChange} value={value}>
          {options.map(v => (
            <option value={v.value}>{v.name}</option>
          ))}
        </select>
      </div>
    );
  };