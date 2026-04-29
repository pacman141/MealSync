import { api } from "../../../shared/api/axios";

export const fetchShoppingListsByUserId = async (userId: number) => {
    const res = await api.get(`/plannings?user=${userId}`);
    return res.data;
};
