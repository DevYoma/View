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

// // Main Component
// const App: React.FC = () => {
//   const [loading, setLoading] = useState(false);

//   const handleButtonClick = () => {
//     setLoading(true);
//     setTimeout(() => setLoading(false), 3000); // Stop loading after 3 seconds
//   };

//   return (
//     <div>
//       <Button variant="contained" onClick={handleButtonClick}>
//         Show Loading Overlay
//       </Button>
//       {loading && <LoadingOverlay />}
//     </div>
//   );
// };

// export default App;
