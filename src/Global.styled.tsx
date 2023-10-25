import styled from 'styled-components'
import Menu from '@mui/material/Menu';

export const IconTableCell = styled.div`
  display: flex;
  align-items: center;

  & *{
    width: 40px !important;
    min-width: 0px !important;
  }
`;

export const StyledMenu = styled(Menu)`
  box-shadow: 0 4px 8px 0 rgba(255, 0, 0, 0.2) !important;
`