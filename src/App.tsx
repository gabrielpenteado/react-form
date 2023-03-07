
import './App.css';

import { Box, Stack, Progress, Spacer } from '@chakra-ui/react';

import { DataDisplayer } from './components/DataDisplayer';
import { SignUp } from './components/SignUp';

function App() {

  return (
    <div className="App">
      <Stack direction={["column", "column", "row"]} spacing="20px">
        <Box 
          w={["390px", "390px", "880px"]} 
          h="720px"
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
          h="720px" 
          boxShadow='2xl'
          overflowY={"auto"}
          display="flex"
          flexDirection={'column'}>
          <Progress height="2px" isIndeterminate />
          <DataDisplayer />
          <Spacer/>
          <Progress height="2px" isIndeterminate />
        </Box>
      </Stack>
    </div>
  )
}

export default App