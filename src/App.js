import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import SelectorProvider from "./Contexts/SelectorProvider";
import { routes } from "./routes/routes";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="">
      <QueryClientProvider client={queryClient}>
        <SelectorProvider>
          <RouterProvider router={routes} />
        </SelectorProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
