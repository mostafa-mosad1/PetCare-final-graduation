import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./components/Header/theme-provider";
import router from "./router";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <RouterProvider router={router}></RouterProvider>
          <Toaster />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
