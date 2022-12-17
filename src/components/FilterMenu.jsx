import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Divider, ListItemIcon, ListItemText } from "@mui/material";
import { SortDesc } from "../constants/icons/SortDesc";
import { SortAsc } from "../constants/icons/SortAsc";
import { SortAZ } from "../constants/icons/SortAZ";
import { SortZA } from "../constants/icons/SortZA";
import { SortUnfinished } from "../constants/icons/SortUnfinished";
import { Check } from "../constants/icons/Check";

export default function BasicMenu({ sort, setSort, componen }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (type) => {
    type = typeof type == "string" ? type : "asc";
    setAnchorEl(null);
    setSort(type ?? "asc");
  };

  return (
    <>
      {componen(handleClick)}
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        className="sort-box"
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem data-cy="sort-latest" onClick={() => handleClose("asc")}>
          <ListItemIcon>
            <SortAsc />
          </ListItemIcon>
          <ListItemText>Terbaru</ListItemText>
          {sort === "asc" && <Check />}
        </MenuItem>
        <Divider />
        <MenuItem data-cy="sort-oldest" onClick={() => handleClose("desc")}>
          <ListItemIcon>
            <SortDesc />
          </ListItemIcon>
          <ListItemText>Terlama</ListItemText>
          {sort === "desc" && <Check />}
        </MenuItem>
        <Divider />
        <MenuItem data-cy="sort-az" onClick={() => handleClose("a-z")}>
          <ListItemIcon>
            <SortAZ />
          </ListItemIcon>
          <ListItemText>A-Z</ListItemText>
          {sort === "a-z" && <Check />}
        </MenuItem>
        <Divider />
        <MenuItem data-cy="sort-za" onClick={() => handleClose("z-a")}>
          <ListItemIcon>
            <SortZA />
          </ListItemIcon>
          <ListItemText>Z-A</ListItemText>
          {sort === "z-a" && <Check />}
        </MenuItem>
        <Divider />
        <MenuItem
          data-cy="sort-unfinished"
          onClick={() => handleClose("unfinished")}
        >
          <ListItemIcon>
            <SortUnfinished />
          </ListItemIcon>
          <ListItemText>Belum Selesai</ListItemText>
          {sort === "unfinished" && <Check />}
        </MenuItem>
      </Menu>
    </>
  );
}
