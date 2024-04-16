// material-ui
import { Box, FormControl, InputAdornment, OutlinedInput } from '@mui/material';

// assets
import { SearchOutlined } from '@ant-design/icons';

// ==============================|| HEADER CONTENT - SEARCH ||============================== //

const Search = () => (
  <Box sx={{ ml: { xs: 0, md: 1 } }}>
    <FormControl sx={{ width: { xs: '100%', md: 224 } }}>
      <OutlinedInput
        size="small"
        id="header-search"
        startAdornment={
          <InputAdornment position="start" sx={{ mr: -0.5 }}>
            <SearchOutlined />
          </InputAdornment>
        }
        aria-describedby="header-search-text"
        inputProps={{
          'aria-label': 'weight'
        }}
        placeholder="Select GP"
        sx={{
          padding: '4px', // Set the padding
          borderRadius: '10px' // Set the border radius
        }}
      />
    </FormControl>
  </Box>
);
const SearchLP = () => {
  return (
    <Box sx={{ ml: { xs: 0, md: 1 } }}>
      <FormControl sx={{ width: { xs: '100%', md: 224 } }}>
        <OutlinedInput
          size="small"
          id="header-search"
          startAdornment={
            <InputAdornment position="start" sx={{ mr: -0.5 }}>
              <SearchOutlined />
            </InputAdornment>
          }
          aria-describedby="header-search-text"
          inputProps={{
            'aria-label': 'weight'
          }}
          placeholder="Select LP"
          sx={{
            padding: '4px', // Set the padding
            borderRadius: '10px' // Set the border radius
          }}
        />
      </FormControl>
    </Box>
  );
};
export { Search, SearchLP };
