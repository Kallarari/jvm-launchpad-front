
import { PageWrapper } from "./styles";

interface AppTemplateProps {
  children:React.ReactNode;
}

export function AppTemplate({children}:AppTemplateProps) {
  return <PageWrapper>{children}</PageWrapper>;
}