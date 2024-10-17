import styled from 'styled-components'
import { breakpoints, Colors } from '../../styles'

export const FooterContainer = styled.header`
  background-color: ${Colors.colorPrimary};
  height: 280px;
  display: flex;
  align-items: start;
  justify-content: center;
  padding-top: 24px;
`

export const FooterContent = styled.div`
  width: 640px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    text-align: center;
    font-size: 12px;

    @media (max-width: ${breakpoints.tablet}) {
      width: 300px;
    }
  }
`

export const SocialContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100px;
  margin: 24px 0 60px 0;

  img {
    width: 24px;
  }
`
