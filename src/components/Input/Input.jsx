import './Input.css';

const Input = ({ isSearch, text, value, onChange, name }) => {
  return (
    <input
      className={`input ${isSearch ? 'search-input' : ''}`}
      value={value}
      onChange={onChange}
      type="text"
      placeholder={text}
      name={name}
    />
  );
};

export default Input;
