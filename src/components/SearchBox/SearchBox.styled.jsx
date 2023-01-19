import styled from 'styled-components';

export const Form = styled.form`
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const FormButton = styled.button`
  background-color: ${p => p.theme.colors.primary};
  padding: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.sm};
  border-color: transparent;

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.background_secondary};
  }
`;
export const FormInput = styled.input`
  border-radius: ${p => p.theme.radii.sm};

  padding: ${p => p.theme.space[3]}px;
`;
