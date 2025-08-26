import type { ChildProps } from "app-types";
import { Footer, Header } from "nexious-library";
import { logo, title } from "@data/demo.json";

const App = ({ children }: ChildProps) => {
  return (
    <div className="app-body">
      <Header logo={logo} />
      {children}
      {/* <Footer title={title} media={{ medias: socials }} /> */}
      <Footer title={title} />
    </div>
  );
};

export default App;
