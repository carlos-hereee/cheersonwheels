import type { ChildProps } from "app-types";
import { Footer, Header } from "nexious-library";

const App = ({ children }: ChildProps) => {
  return (
    <div className="app-body">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default App;
