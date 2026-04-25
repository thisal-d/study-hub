import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
});

export const getRecipes = () => API.get("/recipes");
export const getRecipeById = (id) => API.get(`/recipes/${id}`);
export const createRecipe = (data) => API.post("/recipes", data);
export const updateRecipe = (id, data) => API.put(`/recipes/${id}`, data);
export const deleteRecipe = (id) => API.delete(`/recipes/${id}`);

export default API;
