import type { ChildProps } from "app-types";
import { Footer, Header } from "nexious-library";
import { logo } from "@data/demo.json";

const App = ({ children }: ChildProps) => {
  return (
    <div className="app-body">
      <Header logo={logo} />
      {children}
      <Footer />
    </div>
  );
};

export default App;
