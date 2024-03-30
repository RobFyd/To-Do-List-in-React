import "styled-components";
import { theme } from "./theme";

type Theme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}

// this file is a declaration file for styled-components library