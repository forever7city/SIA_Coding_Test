import styled, { css } from "styled-components";
import { select, make } from "../../assests";

interface Props {
  $component: string;
}

export const Div = styled.div`
  width: 1920px;
  height: 976px;
  background: #ffffff 0% 0% no-repeat padding-box;
  display: flex;
`;

export const Option = styled.div`
  width: 56px;
  height: 976px;
  background: #fcfcfc 0% 0% no-repeat padding-box;
  border: 1px solid #ebedf2;
  display: flex;
  flex-direction: column;
  padding-top: 8px;
`;

export const Creation = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  margin-left: 8px;
  background-color: #d5d9e2;
  background-image: url(${select});
  cursor: pointer;
`;

export const Img = styled.img`
  width: 160px;
  height: 160px;
`;

export const tmpCreation = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  margin-left: 8px;
  background-image: url(${select});
  cursor: pointer;
  ${(props: Props) => {
    switch (props.$component) {
      case "arrow":
        return css`
          background-color: #d5d9e2;
        `;
      default:
        return css`
          background-color: #fcfcfc;
        `;
    }
  }}
`;

export const Box = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  margin-left: 8px;
  margin-top: 8px;
  cursor: pointer;
  background-color: #fcfcfc;
  background-image: url(${make});
`;

export const tmpBox = styled.div`
  width: 40px;
  height: 40px;
  border: none;
  margin-left: 8px;
  background-image: url(${make});
  cursor: pointer;
  ${(props: Props) => {
    switch (props.$component) {
      case "arrow":
        return css`
          background-color: #fcfcfc;
        `;
      default:
        return css`
          background-color: #d5d9e2;
        `;
    }
  }}
`;
