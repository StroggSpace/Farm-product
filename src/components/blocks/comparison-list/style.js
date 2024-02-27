import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 100px;
`;

export const StyledList = styled.ul`
  margin-top: 64px;
  padding: 0;
  margin-bottom: 64px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;
