import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  margin-bottom: 40px;
`;

export const StyledFieldset = styled.fieldset`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-top: 64px;
  background-color: #ffffff;
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1) inset,
    0 2px 10px 1px rgba(0, 0, 0, 0.1);

  border: none;
`;

export const StyledLegend = styled.legend`
  position: absolute;
  top: 24px;
  font-weight: ${(props) => props.theme.body.body18Bold.fontWeight};
  font-size: ${(props) => props.theme.body.body18Bold.fontSize};
  line-height: ${(props) => props.theme.body.body18Bold.lineHeight};
`;

export const StyledList = styled.ul`
  margin: 0;
  padding: 0;
`;

export const StyledListItem = styled.li`
  padding: 15px 0 14px;
`;

export const StyledAddress = styled.input`
  width: calc(100% - 24px);
  padding: 14px 12px;

  border: none;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1) inset;
  outline: none;

  font-weight: ${(props) => props.theme.body.body14.fontWeight};
  font-size: ${(props) => props.theme.body.body14.fontSize};
  line-height: ${(props) => props.theme.body.body14.lineHeight};

  &::placeholder {
    color: ${(props) => props.theme.colors.blackText};
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.lightGray};
  }
`;
