import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box pos="relative" top={12} m="auto">
      <Box p={4} textAlign="center">
        <Text fontSize={"lg"} color="gray.300">
          Built with ❤️ by Emmanuella ✨
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
