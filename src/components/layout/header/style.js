import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  padding: 0 90px;
  width: 1280px;
  margin: 0 auto;
  position: relative;
  height: 80px;
  justify-content: space-between;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.04), 0 0 2px rgba(0, 0, 0, 0.06),
    0 0 1px rgba(0, 0, 0, 0.04), 0 -4px 8px rgba(0, 0, 0, 0.04);
  align-items: center;
  z-index: 5;
`;

export const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;
