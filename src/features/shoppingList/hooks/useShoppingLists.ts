import { useQuery } from "@tanstack/react-query";
import { fetchPlannings } from "../api/shoppingList.api";

export const useShoppingLists = (userId: number, options = {}) => {
    return useQuery({
        queryKey: ["shoppingLists", userId],
        queryFn: () => fetchPlannings(userId),
        select: (res) =>
            res.member.map((item) => ({
                id: item["@id"].split("/").pop(),
                week: item.weekNumber,
                year: item.year,
            })),
        ...options,
    });
};
