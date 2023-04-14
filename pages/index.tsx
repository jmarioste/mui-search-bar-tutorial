import type { NextPage } from "next";

import { Box, Typography } from "@mui/material";
import Searchbar from "../src/components/Searchbar";
import { useRouter } from "next/router";
import { useRecentSearches } from "../src/hooks/useRecentSearches";
import RecentSearches from "../src/components/RecentSearches";
import { useRef, useState } from "react";

const Home: NextPage = () => {
  const router = useRouter();
  const { recentSearches, setRecentSearches } = useRecentSearches();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLFormElement>(null);
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
            setRecentSearches([searchTerm, ...recentSearches]);
          }}
          inputProps={{
            onFocus: () => setOpen(true),
            onBlur: () => setOpen(false),
          }}
        />
        <RecentSearches
          open={open}
          onClose={() => {
            setOpen(false);
          }}
        />
        <code>{router.asPath}</code>
      </Box>
    </Box>
  );
};

export default Home;
