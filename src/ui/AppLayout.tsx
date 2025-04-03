import { Outlet } from "react-router";
import styled from "styled-components";

import Header from "./Header.tsx";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
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
