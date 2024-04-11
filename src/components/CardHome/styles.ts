import styled from 'styled-components'
import { Colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const CardComponent = styled.div`
  width: 480px;
  height: 480px;
  margin-top: 8px;

  .InfoContainter {
    border-right: 1px solid ${Colors.colorSecondary};
    border-bottom: 1px solid ${Colors.colorSecondary};
    border-left: 1px solid ${Colors.colorSecondary};
  }

  .TitleValue {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 16px 8px;

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

  .InfoContainer {
    gap: 16px;
    padding: 0 8px 8px 8px;
  }

  ${TagContainer} {
    position: absolute;
    /* top: 32px; */
  }
`
