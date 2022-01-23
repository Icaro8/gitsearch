import styled from "styled-components";

export const ContainerContent = styled.div`
  width: 100vw;
  height: 100vh;

  background: linear-gradient(-200deg, #041b41, #040d21, #041b41, #431e46);
  position: relative;
  overflow: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
  &::before {
    content: "";
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #041b41;
    position: absolute;
    bottom: 0;
    right: 120px;
    box-shadow: 0 0 5px #eeee;
    animation: upp 7s linear infinite;
    filter: blur(10px);
  }
  &::after {
    content: "";
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #041b41;
    position: absolute;
    bottom: 0;
    right: 500px;
    box-shadow: 0 0 5px #eeee;
    animation: upp 7s linear infinite;
    filter: blur(10px);
  }

  @keyframes upp {
    0% {
      transform: translateY(-600px) translateX(0px);
    }

    100% {
      transform: translateY(50px) translateX(-50px);
    }
  }
`;
export const ContentDowm = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #041b41;
  position: absolute;
  bottom: 0;
  right: 800px;
  box-shadow: 0 0 5px #eeee;
  animation: upp 7s linear infinite;
  filter: blur(10px);

  @keyframes upp {
    0% {
      transform: translateY(-600px) translateX(150px);
    }

    100% {
      transform: translateY(50px) translateX(-50px);
    }
  }
`;

export const ContentDowmTwo = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #041b41;
  position: absolute;
  bottom: 0;
  right: 1000px;
  box-shadow: 0 0 5px #eeee;
  animation: upp 7s linear infinite;
  filter: blur(10px);

  @keyframes upp {
    0% {
      transform: translateY(-600px) translateX(150px);
    }

    100% {
      transform: translateY(50px) translateX(-50px);
    }
  }
`;
export const ContentDowmTree = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #041b41;
  position: absolute;
  bottom: 0;
  right: 1200px;
  box-shadow: 0 0 5px #eeee;
  animation: upp 7s linear infinite;
  filter: blur(10px);

  @keyframes upp {
    0% {
      transform: translateY(-600px) translateX(150px);
    }

    100% {
      transform: translateY(50px) translateX(-50px);
    }
  }
`;
export const ContainerRepos = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
  position: relative;
  z-index: 1;
  overflow-y: scroll;
  height: 80vh;
  align-self: flex-end;
  &::-webkit-scrollbar {
    display: none;
  }
  animation: right 0.6s;
  @keyframes right {
    0% {
      transform: translateX(100px);
    }
`;
export const Grid = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 10px;
`;
export const HeaderContent = styled.div`
  position: fixed;
  top: 0;
`;

export const ContainerProfile = styled.div`
  animation: left 0.6s;
  @keyframes left {
    0% {
      transform: translateX(-100px);
    }
  }
`;
