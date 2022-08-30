import { useState } from 'react';
import { Box, createTheme, Stack, ThemeProvider } from '@mui/material';
import { Feed, Navbar, RightBar, Sidebar, AddPost } from './components/';

const App = () => {
  const [mode, setMode] = useState('light');

  const themeMode = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={themeMode}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Navbar />
        <Stack direction='row' spacing={2} justifyContent='space-between'>
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <RightBar />
        </Stack>
        <AddPost />
      </Box>
    </ThemeProvider>
  );
};

export default App;
