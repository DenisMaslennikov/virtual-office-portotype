import { Outlet } from "react-router";
import styled from "styled-components";

import Header from "./Header.tsx";
import { SIDEBARWIDTH } from "../utils/constatns.ts";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: ${SIDEBARWIDTH} 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

function AppLayout() {
  return (
    <>
      <StyledAppLayout>
        <Header />
        <Outlet />
      </StyledAppLayout>
    </>
  );
}

export default AppLayout;
