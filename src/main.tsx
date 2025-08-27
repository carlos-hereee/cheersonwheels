import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import RoutesRouter from "./utils/router/RoutesRouter.tsx";
import "nexious-library/@index.css";
import "./stylesheets/index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    {/* <UserState> */}
    {/* <AuthState>
        <LogState>
          <GameState>
            <TaskBoardState>
              <AppState>
                <StoreState>
                  <CalendarState>
                    <MediaState>
                      <AdminState> */}
    <App>
      <RoutesRouter />
    </App>
    {/* </AdminState>
                    </MediaState>
                  </CalendarState>
                </StoreState>
              </AppState>
            </TaskBoardState>
          </GameState>
        </LogState>
      </AuthState> */}
    {/* </UserState> */}
  </BrowserRouter>,
);
