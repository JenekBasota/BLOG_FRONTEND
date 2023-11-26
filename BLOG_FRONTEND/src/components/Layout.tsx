import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  // Ваша логика компонента Layout, использующая children
  return (
    <div className="layout">
      {children}
      <p>sd</p>
    </div>
  );
};

export { Layout };
