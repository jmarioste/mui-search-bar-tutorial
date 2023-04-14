import type { NextPage } from "next";

import { Box, Typography } from "@mui/material";
import Searchbar from "../src/components/Searchbar";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <Box maxWidth={"sm"} margin="auto">
      <Typography textAlign="center" my={2}>
        MUI <code>{`<SearchBar/>`}</code> Tutorial
      </Typography>
      <Box my={10}>
        <Searchbar
          onSubmit={(searchTerm: string) => {
            router.push({
              query: {
                search: searchTerm,
              },
            });
          }}
        />
        <code>{router.asPath}</code>
      </Box>
    </Box>
  );
};

export default Home;
