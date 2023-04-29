import * as React from "react";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
/* import { ColorModeSwitcher } from "./ColorModeSwitcher"; */
import AddPlan from "./components/AddPlan";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      {/* <Flex flexDir="row">
        <ColorModeSwitcher justifySelf="flex-end" />
      </Flex> */}
      <Box>
        <AddPlan />
      </Box>
    </Box>
  </ChakraProvider>
);
