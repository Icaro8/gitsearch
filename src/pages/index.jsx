import Head from "next/head";
import { useState, useRef } from "react";
import Link from "next/link";
import { World } from "../styles/pageIndex.js";

import {
  Input,
  Button,
  Stack,
  InputGroup,
  InputLeftElement,
  Center,
  Flex,
} from "@chakra-ui/react";

import { BsSearch, BsGithub } from "react-icons/bs";

export default function Home() {
  const inputRef = useRef();
  const [user, setUser] = useState("");
  function handleUser() {}

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Center
        w="100vw"
        h="100vh"
        bgGradient="linear(to bottom right, #041B41,#040D21,#041B41,#431E46,)"
      >
        <Flex
          flexDirection={"column"}
          alignItems={"center"}
          gap={"10"}
          justifyContent={"flex-start"}
        >
          <World />
          <form action="">
            <Stack direction={"row"} spacing={"10"}>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<BsGithub color="#E2E8F0" />}
                />
                <Input
                  type="text"
                  ref={inputRef}
                  value={user}
                  boxShadow={"md"}
                  onChange={(e) => setUser(e.target.value)}
                  placeholder="profile in Github"
                  w="450px"
                  color="#ddd"
                />
              </InputGroup>
              <Link href={`./Users/${user}`}>
                <a>
                  <Button
                    colorScheme="facebook"
                    siz={"md"}
                    variant={"outline"}
                    boxShadow={"lg"}
                    onClick={handleUser}
                    leftIcon={<BsSearch />}
                  >
                    Submit
                  </Button>
                </a>
              </Link>
            </Stack>
          </form>
        </Flex>
      </Center>
    </div>
  );
}