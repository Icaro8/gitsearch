import styled from "styled-components";

import { FaGithub } from "react-icons/fa";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: #cbd5e0;
  border: 1px solid #a0aec0;
  border-radius: 10px;
  padding: 20px 10px;
`;

export const Name = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    padding: 5px;
    border: 1px solid #d7d7d7;
    border-radius: 10px;
    font-size: 12px;
    box-shadow: 0 0 1px #eee;
  }
`;

export const Title = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
`;

export const Create = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 3px;
`;

export const Language = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
export const Description = styled.p`
  padding: 10px;
  color: #cbd5e0;
  font-family: "Montserrat", sans-serif;
`;

export const ContainerLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;

  a:hover {
    filter: brightness(0.8);
  }
`;
export const GitIcon = styled(FaGithub)`
  color: #cbd5e0;
`;

export const ContainerContent = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;
export const ContainerCreated = styled.div`
  display: flex;
  justify-content: left;
  border: 1px solid #cbd5e0;
  padding: 10px;
  border-radius: 10px;
`;
