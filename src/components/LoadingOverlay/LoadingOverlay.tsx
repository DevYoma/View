import { CircularProgress, Box } from '@mui/material';

// LoadingOverlay Component
const LoadingOverlay = () => (
  <Box
    sx={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000
    }}
  >
    <CircularProgress color="inherit" />
  </Box>
);

export default LoadingOverlay;
