import styled from "styled-components";

export const StyledTabsText = styled.div`
  grid-column: 2 / 3;
  margin: 16px 0 14px;
  height: 105px;
`;

export const StyledDescription = styled.p`
  margin: 0;
  font-size: ${(props) => props.theme.body.body14.fontSize};
  line-height: ${(props) => props.theme.body.body14.lineHeight};
`;

export const StyledDl = styled.dl`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 2px;

  margin: 0;
`;

export const StyledDlWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: ${(props) => props.theme.body.body14.fontSize};

  & dt {
    font-weight: ${(props) => props.theme.body.body14Bold.fontWeight};
  }

  & dd {
    margin-left: 7px;
  }
`;
