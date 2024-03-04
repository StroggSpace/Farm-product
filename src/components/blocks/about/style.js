import styled from "styled-components";

export const StyledSection = styled.section`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 637px 446px;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: calc(100% + 180px);
  margin-left: -90px;
  margin-right: -90px;
  padding: 0 90px;
  background: ${(props) => props.theme.colors.lightBlue};
`;

export const StyledImgContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 447px;
    top: 76px;
    left: 0;
    background-color: #c4e2ff;
    border-radius: 50%;
    z-index: 0;
  }

  & svg {
    position: relative;
  }
`;
