import { useRef, useState } from "react";

const App = () => {
  const [carrinho, setCarrinho] = useState(0);
  const [notificacao, setNotificacao] = useState(null);
  const timeoutRef = useRef();

  function handleClick() {
    setCarrinho(carrinho + 1);
    setNotificacao("Item adicionado ao carrinho");

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setNotificacao(null);
    }, 1000);
  }

  return (
    <div>
      <p>{notificacao}</p>
      <button onClick={handleClick}>Adicionar Carrinho {carrinho}</button>
    </div>
  );
};

export default App;
