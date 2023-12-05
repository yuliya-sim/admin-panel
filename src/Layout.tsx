import {
  AppBar,
  Layout,
  InspectorButton,
  TitlePortal,
  LayoutProps,
} from "react-admin";
import { JSX } from "react/jsx-runtime";

const MyAppBar = () => (
  <AppBar>
    <TitlePortal />
    <InspectorButton />
  </AppBar>
);

export default (props: JSX.IntrinsicAttributes & LayoutProps) => (
  <>
    <Layout {...props} appBar={MyAppBar} />
  </>
);
