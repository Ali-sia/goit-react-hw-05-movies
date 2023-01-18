import { useState } from 'react';
const SearchBox = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleQuerySearch = e => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit(e.currentTarget.value);
        console.log('🐉 ~ SearchBox ~ e.target.value', e.target.value);
      }}
    >
      <input type="text" onChange={handleQuerySearch} />
      <button type="submit">search</button>
    </form>
  );
};

export default SearchBox;
