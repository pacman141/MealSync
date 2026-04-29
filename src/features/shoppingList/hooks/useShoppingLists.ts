import { useQuery } from "@tanstack/react-query";
import { fetchShoppingListsByUserId } from "../api/shoppingList.api";

export const useShoppingLists = (userId: number) => {
    return useQuery({
        queryKey: ["shoppingLists"],
        queryFn: () => fetchShoppingListsByUserId(userId),
    });
};
