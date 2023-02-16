import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import supabase from "./supabaseClient";
import "./index.css";
import { Home, BlogPost } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: async () => {
      return supabase.from("blog_posts").select();
    },
    children: [
      {
        path: "/:id",
        element: <BlogPost />,
        loader: async ({ params }) => {
          return supabase
            .from("blog_posts")
            .select()
            .eq("title", params.id.replace(/_/g, " "))
            .order("created_at");
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
