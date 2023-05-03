import {
  Box,
  Button,
  Flex,
  Text,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deletePlan, updatePlan } from "../features/UserPlan";

const SavedPlans = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state: any) => state.users.value);

  const [showForm, setShowForm] = useState(false);
  const [updateUserPlan, setUpdateUserPlan] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleDeletePlan = (id: number) => {
    dispatch(deletePlan(id));
  };

  const handleCategoryChange = (event: any) => {
    setSelectedCategory(event.target.value);
  };

  const handleUpdatePlan = (id: number) => {
    dispatch(
      updatePlan({
        id: id,
        name: updateUserPlan,
        category: selectedCategory,
      })
    );
    setShowForm(false);
  };

  return (
    <Flex
      flexDir="row"
      gap={3}
      color="#FFF"
      mt="50px"
      fontFamily={"Signika"}
      maxW="80%"
    >
      {userList.map((list: any, idx: number) => {
        return (
          <Box border="1px solid #000" key={idx} p={5}>
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
                          setUpdateUserPlan(e.target.value);
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
                        onClick={() => handleUpdatePlan(list.id)}
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
  );
};

export default SavedPlans;
