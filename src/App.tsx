import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./components/Header/theme-provider";
import router from "./router";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router}></RouterProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
