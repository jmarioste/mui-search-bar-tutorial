import { SearchOutlined } from "@mui/icons-material";
import {
  Divider,
  IconButton,
  InputBase,
  InputBaseProps,
  Paper,
} from "@mui/material";
import { useState } from "react";

type Props = {
  onSubmit(searchTerm: string): void;
  onFocus?(): void;
};
const Searchbar = (props: Props) => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <Paper
      component="form"
      elevation={3}
      sx={{ display: "flex", alignItems: "center", px: 1, py: 0.5 }}
      onSubmit={(e) => {
        e.preventDefault();
        props.onSubmit((searchTerm as string) ?? "");
      }}
    >
      {/* Input base contains the fewest styles possible so it's perfect for creating custom components like these */}
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search..."
        inputProps={{ "aria-label": "search" }}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={(e) => props.onFocus && props.onFocus()}
      />
      <Divider sx={{ height: 28, mx: 0.5 }} orientation="vertical" />
      <IconButton>
        <SearchOutlined />
      </IconButton>
    </Paper>
  );
};
export default Searchbar;
