import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";

import GlobalStyles from "./styles/GlobalStyles.ts";
import AppLayout from "./ui/AppLayout.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import AgileBoard from "./pages/AgileBoard.tsx";
import Chat from "./pages/Chat.tsx";
import Files from "./pages/Files.tsx";
import Permissions from "./pages/Permissions.tsx";
import Settings from "./pages/Settings.tsx";
import Register from "./pages/Register.tsx";
import Login from "./pages/Login.tsx";
import PageNotFound from "./pages/PageNotFound.tsx";
import ThemeContextProvider from "./context/Theme/ThemeContextProvider.tsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <ThemeContextProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <GlobalStyles />

        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to={"dashboard"} />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="board/:boardId" element={<AgileBoard />} />
              <Route path="chat/:chatId" element={<Chat />} />
              <Route path="files" element={<Files />} />
              <Route path="permissions" element={<Permissions />} />
              <Route path="settings" element={<Settings />} />
            </Route>
            <Route path="registion/:inviteId" element={<Register />} />
            <Route path="registion" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeContextProvider>
  );
}

export default App;
