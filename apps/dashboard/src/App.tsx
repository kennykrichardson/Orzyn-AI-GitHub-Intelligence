import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import DashboardPage from "./pages/DashboardPage";

import ComparisonPage from "./pages/ComparisonPage";

import IntelligenceHubPage from "./pages/IntelligenceHubPage";

import ReportsPage from "./pages/ReportsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={
            <DashboardPage />
          }
        />

        <Route
          path="/comparison"
          element={
            <ComparisonPage />
          }
        />

        <Route
          path="/intelligence"
          element={
            <IntelligenceHubPage />
          }
        />

        <Route
          path="/reports"
          element={
            <ReportsPage />
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;