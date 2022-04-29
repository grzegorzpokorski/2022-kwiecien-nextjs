import CssVariables from "./parts/CssVariables";
import GlobalStyle from "./parts/GlobalStyle";

const GlobalLayaut = ({ children }) => {
  return (
    <>
      <CssVariables />
      <GlobalStyle />
      {children}
    </>
  );
};

export default GlobalLayaut;
