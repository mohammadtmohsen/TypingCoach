import React from 'react';
import Select, { StylesConfig } from 'react-select';

interface StyledSelectProps {
  id: string;
  name: string;
  value: { value: number; label: string } | null;
  onChange: (selectedOption: { value: number; label: string } | null) => void;
  options: { value: number; label: string }[];
  placeholder?: string;
}

const customStyles: StylesConfig<{ value: number; label: string }, false> = {
  control: (provided) => ({
    ...provided,
    backgroundColor: '#1A1A1A',
    borderColor: 'gray-300',
    borderRadius: '0.375rem',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
  }),
  option: (provided, state) => ({
    ...provided,
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    backgroundColor: state.isSelected ? '#3b82f6' : '#1A1A1A',
    color: state.isSelected ? 'white' : 'white',
    '&:hover': {
      backgroundColor: '#bfdbfe',
    },
  }),
  menu: (provided) => ({
    ...provided,
    marginTop: '0.25rem',
    backgroundColor: '#1A1A1A',
    borderColor: 'gray-300',
    borderRadius: '0.375rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  }),
  singleValue: (provided) => ({
    ...provided,
    color: 'white',
  }),
};

const CustomSelect: React.FC<StyledSelectProps> = ({
  id,
  name,
  value,
  onChange,
  options,
  placeholder,
}) => {
  return (
    <Select
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      options={options}
      placeholder={placeholder}
      styles={customStyles}
      menuPlacement='auto'
    />
  );
};

export default CustomSelect;
