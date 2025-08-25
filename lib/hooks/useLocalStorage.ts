import { useEffect, useState } from "react";

export const useLocalStorage = (key: string) => {
    const [value, setValue] = useState(() => {
        // in Storybook, initialize without any stored value to ensure a clean
        // state for demonstrating component behavior,
        if (import.meta.env.STORYBOOK) return null;
        return localStorage.getItem(key);
    });

    useEffect(() => {
        const onStorageUpdate = () => {
            setValue(localStorage.getItem(key));
        };
        window.addEventListener("storage", onStorageUpdate); // gets called when other windows modify storage
        return () => window.removeEventListener("storage", onStorageUpdate);
    }, [key]);

    return [
        value,
        (newVal: string) => {
            localStorage.setItem(key, newVal);
            setValue(newVal);
        },
    ] as const;
};
