import React from 'react';

const Select = ({ options, value, onChange }) => (
  <select value={value} onChange={onChange} className="w-full p-2 border rounded">
    {options.map(opt => (
      <option key={opt} value={opt}>{opt}</option>
    ))}
  </select>
);

export default Select;