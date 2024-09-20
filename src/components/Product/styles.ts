import styled from 'styled-components'
import { Colors } from '../../styles'

export const CardComponent = styled.div`
  width: 472px;
  height: 398px;
  margin-top: 40px;
  position: relative;
  border-right: 1px solid ${Colors.colorSecondary};
  border-bottom: 1px solid ${Colors.colorSecondary};
  border-left: 1px solid ${Colors.colorSecondary};


  .InfoContainter {
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 16px;
    padding: 8px 8px;
    height: 170px;
  }

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

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
`
