import './App.css';
import { Typography, Grid, Box } from '@mui/material';
import AIlogo from './AIlogo.png';
import { styled } from '@mui/system';

const ResponsiveImg = styled('img')(({ theme }) => ({
  maxHeight: "100px", // You can adjust these values as needed
  maxWidth: "100px",  // You can adjust these values as needed
  backgroundColor: "transparent",
  margin: "10px",
  [theme.breakpoints.down('sm')]: {
    width: "20px",
    height: "20px"
  },
  [theme.breakpoints.between('sm', 'md')]: {
    width: "80px",
    height: "80px"
  },
  [theme.breakpoints.between('md', 'lg')]: {
    width: "100px",
    height: "100px"
  },
  [theme.breakpoints.up('lg')]: {
    width: "100px",
    height: "100px"
  }
}));

function App() {
  return (
    <>
      <Grid container>
        <Grid item sx={{ border: "1px solid white", height: "100vh", color: "white" }} xs={6} sm={4} md={3} lg={3}>
          <Box sx={{ height: "80vh", backgroundColor: "red", margin: "10vh 20px 10vh 20px", display: "flex", justifyContent: "center" }}>
            <ResponsiveImg src={AIlogo} alt="AI Logo" />
          </Box>
        </Grid>
        <Grid item sx={{ border: "1px solid white", height: "100vh", color: "white" }} xs={6} sm={8} md={9} lg={9}>
          Grid 2
        </Grid>
      </Grid>
    </>
  );
}

export default App;
