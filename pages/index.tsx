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
  // track state for showing RecentSearches
  const [open, setOpen] = useState(false);
  const anchorEl = useRef<HTMLDivElement>(null);
  return (
    <Box maxWidth={"sm"} margin="auto">
      <Typography textAlign="center" my={2}>
        MUI <code>{`<SearchBar/>`}</code> Tutorial
      </Typography>
      <Box ref={anchorEl}>
        <Searchbar
          onSubmit={(searchTerm: string) => {
            // when the user submits the form, we only modify the router query parameters
            router.push({
              query: {
                search: searchTerm,
              },
            });
            // also add to push recent searches after every search
            if (!recentSearches.includes(searchTerm)) {
              setRecentSearches([searchTerm, ...recentSearches]);
            }
          }}
          inputProps={{
            onFocus: () => setOpen(true),
          }}
        />
        <RecentSearches
          open={open}
          anchorEl={anchorEl.current}
          onClose={() => {
            setOpen(false);
          }}
        />
      </Box>
    </Box>
  );
};

export default Home;
