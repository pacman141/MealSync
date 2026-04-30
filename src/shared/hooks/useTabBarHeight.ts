import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

export const useTabBarPadding = () => {
    try {
        return useBottomTabBarHeight();
    } catch {
        return 0;
    }
};
