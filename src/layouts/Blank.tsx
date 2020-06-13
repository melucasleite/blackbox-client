import React, { FC } from "react";

interface IBlankLayoutProps {
  children: any;
}

const BlankLayout: FC<IBlankLayoutProps> = ({ children }) => (
  <React.Fragment>{children}</React.Fragment>
);

export default BlankLayout;
