import { CssBaseline } from "@mui/material";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Chats from "./pages/Chats";
import ChatRoom from "./pages/ChatRoom";
import Login from "./pages/Login";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Chats />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/chat-room/:id",
      element: <ChatRoom />,
    },
  ]);

  return (
    <>
      <CssBaseline />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
