import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Plan {
  id: number;
  name: any;
  category: string;
}

export const userPlanSlice = createSlice({
  name: "userPlan",
  initialState: { value: [] },
  reducers: {
    addPlan: (state: { value: Plan[] }, action: PayloadAction<Plan>) => {
      // get last plan and id
      const lastPlan = state.value[state.value.length - 1];
      const lastId = lastPlan ? lastPlan.id : 0;
      // code to add plan
      const newPlan = { ...action.payload, id: lastId + 1 };
      state.value.push(newPlan);
    },
    deletePlan: (state: { value: Plan[] }, action: PayloadAction<number>) => {
      state.value = state.value.filter((plan) => plan.id !== action.payload);
    },
    /* mutate "state.value" by mapping through the array, for each plan, check if the ID matches the ID of the plan in the action payload.
       If it does, it  will return a new object with the updated name and category. Otherwise, it will return the original plan object. 
       The "state.value" array is then updated with the new array of plans.
    */
    updatePlan: (state: { value: Plan[] }, action: PayloadAction<Plan>) => {
      state.value = state.value.map((p) => {
        if (p.id === action.payload.id) {
          return {
            ...p,
            name: action.payload.name,
            category: action.payload.category,
          };
        }
        return p;
      });
    },
  },
});

export const { addPlan, deletePlan, updatePlan } = userPlanSlice.actions;
export default userPlanSlice.reducer;
