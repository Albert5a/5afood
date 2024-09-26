import styled from 'styled-components'
import { Colors } from '../../styles'

export const CardComponent = styled.div`
  width: 472px;
  margin-top: 40px;
  position: relative;

  img {
    display: block;
  }
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
`
export const InfoContainter = styled.div`
  width: 472px;
  height: 181px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px 8px;
  border-right: 1px solid ${Colors.colorSecondary};
  border-bottom: 1px solid ${Colors.colorSecondary};
  border-left: 1px solid ${Colors.colorSecondary};

  .TitleValuationContent {
    display: flex;
    width: 100%;
    justify-content: space-between;

    h2 {
      font-size: 18px;
      font-weight: bold;
    }

    .ValueContainer {
      display: flex;
      align-items: center;

      .Value {
        font-size: 18px;
        font-weight: bold;
        margin-right: 4px;
      }
    }
  }
`
