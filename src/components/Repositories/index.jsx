import React, { useState, useEffect } from "react";

import Link from "next/link";
import { ConvertToDate } from "../../util";

import { SiJavascript, SiTypescript, SiCss3 } from "react-icons/si";
import { DiPython } from "react-icons/di";
import { BiNotificationOff } from "react-icons/bi";
import { BsStarFill } from "react-icons/bs";
import { VscSourceControl } from "react-icons/vsc";

import {
  Container,
  Name,
  Title,
  Create,
  Language,
  Description,
  ContainerLink,
  GitIcon,
  ContainerContent,
  Column,
  ContainerCreated,
} from "./styles";

export default function RepoComponent({
  title,
  isPublic,
  description,
  created_at,
  language,
  starts,
  contribuitions,
  html_url,
}) {
  const [icon, setIcon] = useState("");
  useEffect(() => {
    switch (language) {
      case "JavaScript":
        console.log("deu certo");
        setIcon(<SiJavascript color="#F8DA23" />);
        return;
      case "TypeScript":
        setIcon(<SiTypescript color="#2f74c0" />);
        return;
      case "CSS":
        setIcon(<SiCss3 color="#0275b9" />);
        return;
      case "Python":
        setIcon(<DiPython />);
        return;
      default:
        setIcon(<BiNotificationOff color="#E53E3E" />);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Name>
        <Title>{title}</Title>
        <span>{isPublic ? "Private" : "Public"}</span>
      </Name>
      <Description>{description}</Description>
      <ContainerContent>
        <Column>
          <Language>
            Linguagen :{icon}
            <span>{language}</span>
          </Language>
          <div>
            <BsStarFill />
            <span>{starts > 0 ? starts : "none"}</span>
            <VscSourceControl />
            <span>{contribuitions > 0 ? contribuitions : "none"}</span>
          </div>
        </Column>
        <ContainerCreated>
          <Create>
            <span>created :</span>
            {ConvertToDate(created_at)}
          </Create>
        </ContainerCreated>
      </ContainerContent>
      <ContainerLink>
        <GitIcon />
        <Link href={html_url}>
          <a>Acesso ao repositório</a>
        </Link>
      </ContainerLink>
    </Container>
  );
}
