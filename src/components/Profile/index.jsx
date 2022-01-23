import React from "react";

import { AiOutlineStar } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { Container, Image, Title, Description, Link } from "./styles.js";
import { ConvertToDate } from "../../util";

export const Profile = ({
  title,
  image,
  loginName,
  followers,
  following,
  publiRepos,
  bio,
  created_at,
  linkProfile,
}) => {
  return (
    <Container>
      <div className="image">
        <Image src={image} alt={title} />
      </div>
      <div className="titleContent">
        <Title>{title}</Title>
        <span className="text">{loginName}</span>
      </div>
      <div className="svg">
        <div>
          <AiOutlineStar />
          <span>{followers}</span>
        </div>
        ·
        <div>
          <FaUsers />
          <span>{following}</span>
        </div>
      </div>
      <div className="flex">
        <div>
          <h3>Repositórios:</h3>
          <span>{publiRepos}</span>
        </div>
        <Description>
          <h3>Bio:</h3>
          <p>{bio}</p>
          <div className="date">
            <p>since:</p>
            {ConvertToDate(created_at)}
          </div>
        </Description>
      </div>
      <Link>
        <a href={linkProfile}>Profile</a>
      </Link>
    </Container>
  );
};
