import { CssBaseline } from "@mui/material";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Chats from "./pages/Chats";
// import ChatRoom from "./pages/C hatRoom";
import Login from "./pages/Login";
import Protected from "./pages/Protected";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Protected>
          <Chats />
        </Protected>
      ),
    },
    {
      path: "/login",
      element: <Login />,
    },
    // {
    //   path: "/chat-room/:id",
    //   element: <ChatRoom />,
    // },
  ]);

  return (
    <>
      <CssBaseline />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
