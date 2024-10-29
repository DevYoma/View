import { TextField, InputAdornment, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        // maxWidth: 500,
        bgcolor: 'background.paper',
        borderRadius: '20px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        padding: '5px 10px',
      }}
    >
      <TextField
        fullWidth
        variant="standard"
        placeholder="Search for services"
        InputProps={{
          disableUnderline: true,
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="primary" />
            </InputAdornment>
          ),
          sx: {
            fontSize: '1rem',
            padding: '10px',
          },
        }}
      />
    </Box>
  );
};

export default SearchBar;
