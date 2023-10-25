import React, {ReactNode} from 'react'
import styled from 'styled-components'

export const StyledIconHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

interface IconHolderProps {
  children: ReactNode;
}

function IconHolder({ children }: IconHolderProps) {
  return (
    <StyledIconHolder>
      {children}
    </StyledIconHolder>
  )
}

export default IconHolder
