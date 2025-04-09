import { useEffect, useState } from "react";
import styled from "styled-components";

// TODO Для экспериментов. Удалить.

const Container = styled.div`
  display: flex;
  height: 100vh;
  transition: all 0.3s ease;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Column = styled.div<{ $visible: boolean }>`
  flex: 1;
  padding: 20px;
  border-right: 1px solid #ccc;
  //display: ${(props) => (props.$visible ? "block" : "none")};

  @media (min-width: 601px) {
    display: block !important;
  }
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 10px;
  background: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  width: 100%;
  &:hover {
    background: #0056b3;
  }
`;

function Test() {
  const [view, setView] = useState("channels");
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 600);

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth < 600);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container>
      {/* Колонка с каналами */}
      <Column $visible={view === "channels" || !isSmallScreen}>
        <h2>Каналы</h2>
        <Button onClick={() => setView("chat")}>Открыть чат</Button>
      </Column>

      {/* Колонка с чатом */}
      <Column $visible={view === "chat" || window.innerWidth > 600}>
        <h2>Чат</h2>
        <Button onClick={() => setView("channels")}>Назад к каналам</Button>
        <Button onClick={() => setView("users")}>Показать участников</Button>
      </Column>

      {/* Колонка с участниками */}
      <Column $visible={view === "users" || window.innerWidth > 600}>
        <h2>Участники</h2>
        <Button onClick={() => setView("chat")}>Назад в чат</Button>
      </Column>
    </Container>
  );
}

export default Test;
