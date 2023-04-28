import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPlan, deletePlan } from "../features/UserPlan";

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

  const handleDeletePlan = (id: number) => {
    dispatch(deletePlan(id));
  };

  return (
    <>
      <Flex flexDir="column">
        <Box w="30%">
          <Heading>Welcome, {userName || "Guest"}</Heading>
          <form>
            <FormControl>
              <Input
                id="name"
                type="text"
                name="name"
                placeholder="what's your name?"
                value={userName}
                onChange={handleUserName}
              />
            </FormControl>
            <Text>Add Plan</Text>
            <FormControl>
              <Input
                id="task"
                type="text"
                placeholder="task/plan"
                onChange={(e: any) => {
                  setUserPlan(e.target.value);
                }}
              />
            </FormControl>
            <Select
              placeholder="select category"
              id="category"
              name="category"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="personal">Personal</option>
              <option value="business">Business</option>
            </Select>
            <Button onClick={handleSavePlan}>SAVE</Button>
          </form>
        </Box>
        {/* display saved plans */}
        <Flex display="column" gap={3}>
          {userList.map((list: any) => {
            return (
              <Box border="1px solid #000" key={list}>
                <Text>{list.name}</Text>
                <Text>{list.category}</Text>
                <Box>
                  <form>
                    <FormControl>
                      <Input
                        id="update-task"
                        type="text"
                        placeholder="task/plan"
                        onChange={(e: any) => {
                          setUserPlan(e.target.value);
                        }}
                      />
                    </FormControl>
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
                    <Button onClick={() => {}}>UPDATE</Button>
                    <Button onClick={() => handleDeletePlan(list.id)}>DELETE</Button>
                  </form>
                </Box>
              </Box>
            );
          })}
        </Flex>
      </Flex>
    </>
  );
};

export default AddPlan;
