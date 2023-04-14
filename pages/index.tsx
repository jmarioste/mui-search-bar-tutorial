import type { NextPage } from "next";

import { Box, Typography } from "@mui/material";
import Searchbar from "../src/components/Searchbar";

const Home: NextPage = () => {
  return (
    <Box maxWidth={"sm"} margin="auto">
      <Typography textAlign="center" my={2}>
        MUI <code>{`<SearchBar/>`}</code> Tutorial
      </Typography>
      <Box my={10}>
        <Searchbar />
      </Box>
    </Box>
  );
};

export default Home;
