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
  RadioGroup,
  Radio,
} from "@chakra-ui/react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPlan, deletePlan } from "../features/UserPlan";
import "./styles/index.css";

const AddPlan = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state: any) => state.users.value);

  const [userName, setUserName] = useState("");
  const [userPlan, setUserPlan] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showForm, setShowForm] = useState(false);

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

  const handleDeletePlan = (id: number) => {
    dispatch(deletePlan(id));
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
                  w={"60%"}
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
                    onClick={handleSavePlan}
                    fontWeight={700}
                    w={"50%"}
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
        <Flex
          flexDir="row"
          gap={3}
          color="#FFF"
          mt="50px"
          fontFamily={"Signika"}
          maxW="80%"
        >
          {userList.map((list: any) => {
            return (
              <Box border="1px solid #000" key={list} p={5}>
                <Text>{list.name}</Text>
                <RadioGroup defaultValue="1">
                  <Radio value="1">{list.category}</Radio>
                </RadioGroup>
                <Box>
                  {showForm ? (
                    <form>
                      <Stack spacing={4}>
                        <Box>
                          <Textarea
                            id="task"
                            placeholder="task/plan"
                            onChange={(e: any) => {
                              setUserPlan(e.target.value);
                            }}
                          />
                        </Box>
                        <Box>
                          <Select
                            placeholder="change category"
                            id="update-category"
                            name="category"
                            value={selectedCategory}
                            onChange={handleCategoryChange}
                          >
                            <option value="personal">Personal</option>
                            <option value="business">Business</option>
                          </Select>
                        </Box>
                        <Box>
                          <Button
                            onClick={() => {}}
                            bgColor={"transparent"}
                            className="card-btn"
                            _hover={{ backgroundColor: "transparent" }}
                          >
                            SAVE
                          </Button>
                          <Button
                            onClick={() => setShowForm(false)}
                            className="danger-btn"
                            bgColor={"transparent"}
                            _hover={{ backgroundColor: "transparent" }}
                          >
                            CANCEL
                          </Button>
                        </Box>
                      </Stack>
                    </form>
                  ) : (
                    <Button
                      onClick={() => setShowForm(true)}
                      className="card-btn"
                      bgColor={"transparent"}
                      _hover={{ backgroundColor: "transparent" }}
                    >
                      UPDATE
                    </Button>
                  )}
                  <Box mt="5">
                    <Button
                      onClick={() => handleDeletePlan(list.id)}
                      className="danger-btn"
                      bgColor={"transparent"}
                      _hover={{ backgroundColor: "transparent" }}
                    >
                      DELETE
                    </Button>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Flex>
      </Flex>
    </Container>
  );
};

export default AddPlan;
