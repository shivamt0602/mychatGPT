import './App.css';
import { Typography, Grid, Box, Container } from '@mui/material';
import AIlogo from './AIlogo.png';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import PersonIcon from '@mui/icons-material/Person';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import InputAdornment from '@mui/material/InputAdornment';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';

const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'white',
              },
              '&:hover fieldset': {
                borderColor: 'white',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'white',
              },
            },
            '& .MuiInputBase-input': {
              color: 'white', // Set text color to white
            },
          },
        },
      },
    },
  });

const ResponsiveImg = styled('img')(({ theme }) => ({
  maxHeight: "100px", // You can adjust these values as needed
  maxWidth: "100px",  // You can adjust these values as needed
  margin: "10px",

  [theme.breakpoints.down('sm')]: {
    width: "90px",
    height: "90px"
  },
  [theme.breakpoints.between('sm', 'md')]: {
    width: "100px",
    height: "100px"
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
  const outerTheme = useTheme();

  return (
    <>
      <Grid container>
        <Grid item sx={{ border: "1px solid white", height: "100vh", color: "white" }} xs={4} sm={4} md={3} lg={3}>
          <Box sx={{ height: "80vh", margin: "10vh 20px 10vh 20px" }}>
            <Stack spacing={5} direction="column" alignItems="center">
              <ResponsiveImg src={AIlogo} alt="AI Logo" />
              <Button variant='contained' sx={{ width: "15vw" }}>New Chat</Button>
            </Stack>
            <Stack spacing={2} direction="column" alignItems="center" sx={{ marginTop: "30vh" }}>
              <Button variant="outlined" sx={{ color: "white", border: "1px solid white" }}>Chat 3</Button>
              <Button variant="outlined" sx={{ color: "white", border: "1px solid white" }}>Chat 2</Button>
              <Button variant="outlined" sx={{ color: "white", border: "1px solid white" }}>Chat 1</Button>
            </Stack>
          </Box>
        </Grid>
        <Grid item sx={{ border: "1px solid white", height: "100vh", color: "white", display: 'flex', flexDirection: 'column' }} xs={8} sm={8} md={9} lg={9}>
          <Container sx={{ overflowY: 'auto', flexGrow: 1}}>
            <Box sx={{marginTop:"2vh"}}>
              <PersonIcon />
              <Typography sx={{ backgroundColor: "#31363F", padding: "10px" }}>
                this is my query about ChatGPT
              </Typography>
            </Box>
            <Box sx={{marginTop:"2vh"}}>
              <SmartToyIcon />
              <Typography sx={{ backgroundColor: "#31363F", padding: "10px" }}>
                ChatGPT is a chatbot and virtual assistant developed by OpenAI and launched on November 30, 2022. Based on large language models (LLMs), it enables users to refine and steer a conversation towards a desired length, format, style, level of detail, and language. Successive user prompts and replies are considered at each conversation stage as context.

                ChatGPT is credited with starting the AI boom, which has led to ongoing rapid investment in and public attention to the field of artificial intelligence. By January 2023, it had become what was then the fastest-growing consumer software application in history, gaining over 100 million users and contributing to the growth of OpenAI's current valuation of $86 billion. ChatGPT's release spurred the release of competing products, including Gemini, Claude, Llama, Ernie and Grok. Microsoft launched Copilot, now based on OpenAI's GPT-4o. Some observers raised concern about the potential of ChatGPT and similar programs to displace or atrophy human intelligence, enable plagiarism, or fuel misinformation.

                ChatGPT is built on OpenAI's proprietary series of generative pre-trained transformer (GPT) models and is fine-tuned for conversational applications using a combination of supervised learning and reinforcement learning from human feedback. ChatGPT was released as a freely available research preview, but due to its popularity, OpenAI now operates the service on a freemium model. Users on its free tier can access GPT-4o and GPT-3.5. The ChatGPT subscriptions "Plus", "Team" and "Enterprise" provide additional features such as DALL-E 3 image generation and increased GPT-4o usage limit.
              </Typography>
            </Box>
          </Container>
          <Box sx={{ display: "flex", justifyContent: "center", padding: '30px'}}>
            <ThemeProvider theme={customTheme(outerTheme)}>
              <TextField
                variant="outlined"
                sx={{ width: "50vw" }}
                multiline
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button><SendIcon /></Button>
                    </InputAdornment>
                  ),
                }}
              />
            </ThemeProvider>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
