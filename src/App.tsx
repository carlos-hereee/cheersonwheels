import type { ChildProps } from "app-types";
import { Footer, Header } from "nexious-library";
import { logo, menu } from "@data/demo.json";

const App = ({ children }: ChildProps) => {
  return (
    <div className="app-body">
      <Header logo={logo} menu={menu} />
      {children}
      <Footer />
    </div>
  );
};

export default App;
