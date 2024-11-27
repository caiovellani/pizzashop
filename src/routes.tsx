import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "./pages/_layouts/auth";
import { Dashboard } from "./pages/app/Dashboard";
import { SignIn } from "./pages/auth/Sign-in";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [{ path: '/', element: <Dashboard /> }]
  },
  {
    path: '/',
    element: <AppLayout />,
    children: [{ path: '/sign-in', element: <SignIn /> }]
  }
])  