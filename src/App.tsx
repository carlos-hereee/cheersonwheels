import type { ChildProps } from "app-types";
import { Footer, Header } from "nexious-library";
import { logo, title, socials, menu, hoursOfOperation } from "@data/demo.json";
import { useNavigate } from "react-router-dom";

const App = ({ children }: ChildProps) => {
  const navigate = useNavigate();
  const handleMenu = (menuItem: { link: string }) => navigate(menuItem.link);
  return (
    <div className="app-body">
      <Header logo={logo} onLogoCLick={() => navigate("/")} menu={menu} hideIcons updateMenu={handleMenu} />
      {children}
      <Footer appName={title} media={socials} hoursOfOperation={hoursOfOperation} />
    </div>
  );
};

export default App;
