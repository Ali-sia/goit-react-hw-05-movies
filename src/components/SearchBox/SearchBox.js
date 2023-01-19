import { useState } from 'react';

import { Form, FormButton, FormInput } from './SearchBox.styled';

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
      <FormInput type="text" onChange={handleQuerySearch} />
      <FormButton type="submit">Search</FormButton>
    </Form>
  );
};

export default SearchBox;
