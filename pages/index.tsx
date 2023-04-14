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
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Box maxWidth={"sm"} margin="auto">
      <Typography textAlign="center" my={2}>
        MUI <code>{`<SearchBar/>`}</code> Tutorial
      </Typography>
      <Box ref={ref}>
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
          }}
        />
        <RecentSearches
          open={open}
          anchorEl={ref.current}
          onClose={() => {
            setOpen(false);
          }}
        />
      </Box>
    </Box>
  );
};

export default Home;
