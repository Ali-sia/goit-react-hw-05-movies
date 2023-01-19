import { useState } from 'react';

import { Form } from './SearchBox.styled';

const SearchBox = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleQuerySearch = e => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const onFormSubmit = e => {
    e.preventDefault();
    onSubmit(searchQuery);
    setSearchQuery('');
  };

  return (
    <Form onSubmit={onFormSubmit}>
      <input type="text" onChange={handleQuerySearch} />
      <button type="submit">Search</button>
    </Form>
  );
};

export default SearchBox;
