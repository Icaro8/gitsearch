import styled from "styled-components";

export const Container = styled.div`
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  color: #a0aec0;
  div {
    .text {
      font-size: 14px;
      color: #a0aec0;
      font-family: "Helvetica Neue";
    }
  }
  .svg {
    display: flex;
    justify-content: center;
    margin: 0 10px;
    gap: 5px;

    div {
      display: flex;
      align-items: center;
      gap: 2px;
    }
  }
  .flex {
    display: flex;
    flex-direction: column;
    div {
      display: flex;
      margin-top: 5px;
    }
  }
  .titleContent {
    text-align: center;
  }
  .image {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  box-shadow: 2px 2px 1px #aaa;
`;

export const Title = styled.h3`
  font-family: -apple-system;
  font-size: 20px;
  font-weight: bold;
  color: #a0aec0;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  .date {
    display: flex;
    gap: 5px;
  }
`;
export const Link = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: underline;
  }
`;
