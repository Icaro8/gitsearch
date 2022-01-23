import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  border-bottom: 1px solid #fff;
  display: flex;
  justify-content: space-between;
  padding: 20px 10px;
  color: #a0aec0;
`;

export const ContianerBack = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  padding: 5px;

  &:hover {
    box-shadow: 0 0 0 1px #a0aec0;
    border-radius: 10px;
    transition: linear 0.2s;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: "Montserrat";
  svg {
    width: 35px;
    height: 35px;
  }
`;
