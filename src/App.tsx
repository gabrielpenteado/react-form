
import './App.css';

import { Box, Stack, Progress, Spacer } from '@chakra-ui/react';

import { DataDisplay } from './components/DataDisplay';
import { SignUp } from './components/SignUp';

function App() {

  return (
    <div className="App">
      <Stack direction={["column", "column", "row"]} spacing="40px">
        <Box 
          w={["390px", "390px", "880px"]} 
          h="780px"
          boxShadow='2xl' 
          display="flex"
          flexDirection={'column'}>
          <Progress height="2px" isIndeterminate />
          <SignUp />
          <Spacer/>
          <Progress height="2px" isIndeterminate />
        </Box>
        <Box 
          w={["390px", "390px", "880px"]} 
          h="780px" 
          boxShadow='2xl'
          overflowY={"auto"}
          display="flex"
          flexDirection={'column'}>
          <Progress height="2px" isIndeterminate />
          <DataDisplay />
          <Spacer/>
          <Progress height="2px" isIndeterminate />
        </Box>
      </Stack>
    </div>
  )
}

export default App