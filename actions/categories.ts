import { Category } from "@/types";

const getCategories = async (): Promise<Category[]> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
    return res.json();
};

export { getCategories };
