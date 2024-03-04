import styled from "styled-components";

export const StyledCatalogWrapper = styled.div`
  display: grid;
  grid-template-columns: 353px 1fr;
  column-gap: 20px;

  margin-left: -90px;
  margin-right: -90px;
  padding: 57px 90px;
  background-color: ${(props) => props.theme.colors.lightGray};
`;
