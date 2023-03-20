import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";

import routes from "./router/routes";
import Loading from "./layout/components/Loading";

function App() {
   return (
      <Suspense fallback={<Loading />}>
         <RouterProvider router={routes} />
      </Suspense>
   );
}

export default App;
