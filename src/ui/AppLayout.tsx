import { Outlet } from "react-router";
import styled from "styled-components";

import Header from "./Header.tsx";
import Sidebar from "./Sidebar.tsx";
import { BACKGROUND_COLOR, SIDEBAR_WIDTH } from "../utils/constants.ts";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: ${SIDEBAR_WIDTH} 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

const Main = styled.main`
  background-color: var(${BACKGROUND_COLOR});
  padding: 1rem 2rem;
  overflow: auto;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

function AppLayout() {
  return (
    <>
      <StyledAppLayout>
        <Header />

        <Sidebar />
        <Main>
          <Container>
            <Outlet />
          </Container>
        </Main>
      </StyledAppLayout>
    </>
  );
}

export default AppLayout;
