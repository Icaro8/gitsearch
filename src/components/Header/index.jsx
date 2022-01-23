import React from "react";
import { useRouter } from "next/router";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";

import { Container, ContianerBack, Title } from "./styles";

export function Header() {
  const route = useRouter();

  function handleBack() {
    route.push("/");
  }
  return (
    <Container>
      <ContianerBack onClick={handleBack}>
        <AiOutlineArrowLeft />
        <strong>go back</strong>
      </ContianerBack>
      <Title>
        <strong>GitSearch</strong>
        <BsGithub />
      </Title>
    </Container>
  );
}
