import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  Heading,
  Input,
  Select,
  Text,
  Textarea,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPlan } from "../features/UserPlan";
import "./styles/index.css";
import SavedPlans from "./SavedPlans";

const AddPlan = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state: any) => state.users.value);

  const [userName, setUserName] = useState("");
  const [userPlan, setUserPlan] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleUserName = (event: any) => {
    setUserName(event.target.value);
  };

  const handleCategoryChange = (event: any) => {
    setSelectedCategory(event.target.value);
  };

  const handleSavePlan = () => {
    dispatch(
      addPlan({
        name: userPlan,
        category: selectedCategory,
        id: userList.length + 1,
      })
    );
  };

  return (
    <Container maxW={"4xl"}>
      <Flex flexDir="column" alignItems={"center"}>
        <Box w="50%" mt={8} color={"#FFF"}>
          <Heading fontFamily={"Raleway"} fontWeight="800">
            Welcome, {userName || "Guest"}
          </Heading>
          <Box mt="3" fontFamily={"Signika"}>
            <form>
              <FormControl>
                <Input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="what's your name?"
                  value={userName}
                  onChange={handleUserName}
                  w={{ base: "100%", md: "60%" }}
                />
              </FormControl>
              <Text mt={4} mb={3}>
                Add Plan
              </Text>
              <Stack spacing={4}>
                <Box>
                  <Textarea
                    id="task"
                    placeholder="task/plan"
                    onChange={(e: any) => {
                      setUserPlan(e.target.value);
                    }}
                    value={userPlan}
                  />
                </Box>
                <Box>
                  <Select
                    placeholder="change category"
                    id="update-category"
                    name="category"
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    bgColor={"#252525"}
                    _hover={{ backgroundColor: "#000" }}
                  >
                    <option
                      className="dropdown-btn"
                      value="personal"
                      style={{ backgroundColor: "#252525" }}
                    >
                      Personal
                    </option>
                    <option
                      className="dropdown-btn"
                      value="business"
                      style={{ backgroundColor: "#252525" }}
                    >
                      Business
                    </option>
                  </Select>
                </Box>
                <Box>
                  <Button
                    className="save-btn"
                    bgColor={"transparent"}
                    onClick={() => {
                      handleSavePlan();
                      setUserPlan([]);
                      setSelectedCategory("");
                    }}
                    fontWeight={700}
                    w={"33%"}
                    _hover={{ backgroundColor: "transparent" }}
                  >
                    SAVE
                  </Button>
                </Box>
              </Stack>
            </form>
          </Box>
        </Box>
        {/* display saved plans */}
        <SavedPlans />
      </Flex>
    </Container>
  );
};

export default AddPlan;
