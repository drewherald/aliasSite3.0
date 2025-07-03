import React, { useState } from 'react';

const options: string[] = ['Option 1', 'Option 2', 'Option 3'];

const CustomSelect: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div style={styles.container}>
      <label htmlFor="custom-select" style={styles.label}>
        Choose an option
      </label>
      <select
        id="custom-select"
        value={selectedValue}
        onChange={handleChange}
        style={styles.select}
      >
        <option value="" disabled>
          -- Select an option --
        </option>
        {options.map((option) => (
          <option key={option} value={option} style={styles.option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    width: '250px',
    margin: '1rem auto',
    fontFamily: 'Roboto, sans-serif',
  },
  label: {
    display: 'block',
    marginBottom: '0.5rem',
    fontSize: '14px',
    color: '#555',
  },
  select: {
    width: '100%',
    padding: '10px 14px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    backgroundColor: '#fff',
    appearance: 'none',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
  },
  option: {
    padding: '10px',
  },
};

export default CustomSelect;
