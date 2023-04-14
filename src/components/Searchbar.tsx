import { SearchOutlined } from "@mui/icons-material";
import { Divider, IconButton, InputBase, Paper } from "@mui/material";

const Searchbar = () => {
  return (
    <Paper
      component="form"
      elevation={3}
      sx={{ display: "flex", alignItems: "center", px: 1, py: 0.5 }}
    >
      {/* Input base contains the fewest styles possible so it's perfect for creating custom components like these */}
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search..."
        inputProps={{ "aria-label": "search" }}
      />
      <Divider sx={{ height: 28, mx: 0.5 }} orientation="vertical" />
      <IconButton>
        <SearchOutlined />
      </IconButton>
    </Paper>
  );
};
export default Searchbar;
