import { ReactElement } from "react";
import "./styles.scss";

interface IGlobalStyles {
   children: ReactElement;
}

const GlobalStyles = ({ children }: IGlobalStyles) => {
   return <>{children}</>;
};

export default GlobalStyles;
