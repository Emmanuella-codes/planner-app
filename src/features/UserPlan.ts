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
    updatePlan: (state: { value: Plan[] }, action: PayloadAction<Plan>) => {
      state.value.map((p) => {
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
