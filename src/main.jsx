import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// const rotuer = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/coin-info/:coinId",
//     element: <CoinInfo />,
//     errorElement: <DataError />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
