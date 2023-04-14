import {
  Menu,
  MenuItem,
  MenuList,
  PopperProps,
  Popper,
  Fade,
  Paper,
} from "@mui/material";
import { useRecentSearches } from "../hooks/useRecentSearches";

type Props = {
  open: boolean;
  onClose(): void;
};

const RecentSearches = ({ open, onClose }: Props) => {
  const { recentSearches, setRecentSearches } = useRecentSearches();
  if (!open) return null;
  return (
    <Paper>
      <MenuList>
        {!recentSearches.length ? (
          <>
            <MenuItem disabled>You have no recent searches...</MenuItem>
          </>
        ) : (
          <>
            {recentSearches.map((searchTerm, i) => {
              return <MenuItem key={i}>{searchTerm}</MenuItem>;
            })}
          </>
        )}
      </MenuList>
    </Paper>
  );
};
export default RecentSearches;
