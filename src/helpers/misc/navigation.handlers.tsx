import { navbarPages } from "@/constants/navigation.menu";

export const getNextMenuItem = (pathname: string, v: number) => {
    const keys = Object.keys(navbarPages);
    const currentIndex = keys.findIndex(key => navbarPages[key].path === pathname);
    if (currentIndex === -1) {
        return null;
    }
    const newIndex = (currentIndex + v + keys.length) % keys.length;
    const nextKey = keys[newIndex];
    window.location.href = navbarPages[nextKey].path;
};

