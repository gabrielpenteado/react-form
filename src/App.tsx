
import './App.css';

import { Box, Stack } from '@chakra-ui/react';

import { DataDisplayer } from './components/DataDisplayer';
import { SignUp } from './components/SignUp';

function App() {

  return (
    <div className="App">
      <Stack direction={["column", "column", "row"]} spacing="20px">
        <Box w={["390px", "390px", "880px"]} h="720px" boxShadow='2xl'>
          <SignUp />
        </Box>
        <Box w={["390px", "390px", "880px"]} h="720px" boxShadow='2xl'>
          <DataDisplayer />
        </Box>
      </Stack>
    </div>
  )
}

export default App
