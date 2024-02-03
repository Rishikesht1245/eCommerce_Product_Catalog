import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const HomePage = lazy(() => import("./pages/HomePage"));
  const CatalogPage = lazy(() => import("./pages/CatalogPage"));
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<CatalogPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
