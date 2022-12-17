import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect({ options, value, handleChange }) {
  const values = () => {
    return options.map((e) => (
      <MenuItem
        data-cy={`modal-add-priority-${e.value}`}
        className="flex-between"
        key={e.value}
        value={e.value}
      >
        {e.label}
      </MenuItem>
    ));
  };
  return (
    <Box sx={{ maxWidth: 205, minWidth: 205 }}>
      <FormControl fullWidth>
        <Select
          data-cy="modal-add-priority-dropdown"
          labelId="demo-simple-select-label"
          id="simple-select"
          value={value}
          onChange={handleChange}
        >
          {values()}
        </Select>
      </FormControl>
    </Box>
  );
}
