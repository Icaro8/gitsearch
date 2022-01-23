import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import toast from "react-hot-toast";
import { Profile } from "../../components/Profile";
import RepoComponent from "../../components/Repositories";
import { Header } from "../../components/Header";
import {
  HeaderContent,
  ContainerRepos,
  ContainerContent,
  ContentDowm,
  ContentDowmTwo,
  ContentDowmTree,
  Grid,
  ContainerProfile,
} from "./style";

function User({ resuts: query, repos: repositories, stats: stats }) {
  const router = useRouter();
  if (stats >= 400) {
    router.push("/");
  }

  if (stats === 200) toast.success("user found ☺️");
  return (
    <ContainerContent>
      <ContentDowm />
      <ContentDowmTwo />
      <ContentDowmTree />
      <Head>
        <title>{query.name}</title>
      </Head>
      <HeaderContent>
        <Header />
      </HeaderContent>
      <Grid>
        <ContainerProfile>
          <Profile
            title={query.name}
            loginName={query.login}
            image={query.avatar_url}
            bio={query.bio}
            publiRepos={query.public_repos}
            followers={query.followers}
            following={query.following}
            created_at={query.created_at}
            linkProfile={query.html_url}
          />
        </ContainerProfile>
        <ContainerRepos>
          {repositories.map((repo) => {
            return (
              <RepoComponent
                key={repo.id}
                title={repo.name}
                isPublic={repo.private}
                description={repo.description}
                created_at={repo.created_at}
                language={repo.language}
                starts={repo.stargazers_count}
                contribuitions={repo.watchers_count}
                html_url={repo.html_url}
              />
            );
          })}
        </ContainerRepos>
      </Grid>
    </ContainerContent>
  );
}

export async function getServerSideProps(context) {
  const data = await fetch(
    `https://api.github.com/users/${context.params.user}`
  );
  const repos = await fetch(
    `https://api.github.com/users/${context.params.user}/repos`
  );
  const repositories = await repos.json();
  const user = await data.json();
  const response = user;
  const gitRepos = repositories;

  const stats = data.status;
  return {
    props: { resuts: response, repos: gitRepos, stats: stats },
  };
}

export default User;
