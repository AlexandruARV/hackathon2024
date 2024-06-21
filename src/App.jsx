import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import Login, { action as createUser } from "./features/user/Login";
import Articles from "./features/articles/Articles";
import AppLayout from "./ui/AppLayout";
import Products from "./features/products/Products";
import QuizSelect from "./features/quizzes/QuizSelect";
import Register from "./features/user/Register";
import Quizz from "./features/quizzes/Quizz";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login />, action: createUser },
      { path: "/register", element: <Register /> },
      { path: "/articles", element: <Articles /> },
      { path: "/products", element: <Products /> },
      { path: "/quizz", element: <QuizSelect /> },
      { path: "/quizz/:id", element: <Quizz /> },

    ],
  },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router}></RouterProvider>;
    </div>
  );
}

export default App;
