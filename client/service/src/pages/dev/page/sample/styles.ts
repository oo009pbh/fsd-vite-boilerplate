import styled from '@emotion/styled';
import { Colors } from '@shared';

export const SampleMain = styled.main`
  background-color: ${Colors.White};

  & > section {
    display: flex;
    flex-wrap: wrap;
    margin: 0 0.5rem;

    & > div.component_column {
      display: flex;
      flex-direction: column;

      background-color: #e6e6e6;
      padding: 2rem;
      margin: 0.5rem;

      & > * {
        margin: 1rem;
      }
    }

    & > div.full_screen {
      background-color: #e6e6e6;
      padding: 2rem;
      margin: 0.5rem;

      & > * {
        margin: 1rem;
      }

      & > div.full_screen_content {
        display: flex;
        flex-wrap: wrap;
      }
    }

    & > div.full_screen {
      background-color: #e6e6e6;
      padding: 2rem;
      margin: 0.5rem;

      & > * {
        margin: 1rem;
      }

      & > div.full_screen_content {
        display: flex;
        flex-wrap: wrap;
      }
    }
  }
`;
