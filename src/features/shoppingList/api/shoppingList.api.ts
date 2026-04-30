import { api } from "../../../shared/api/axios";
import { ApiShoppingListsCollection, PlanningApi } from "../types/shoppingList.types";

export const fetchPlannings = async (userId: number): Promise<ApiShoppingListsCollection<PlanningApi>> => {
    const { data } = await api.get("/plannings", {
        params: { user: userId },
    });

    return data;
};
