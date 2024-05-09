import React, { useState } from "react";

function App() {
  const [planilhas, setPlanilhas] = useState([]);

  const carregarPlanilhas = () => {
    const planilhaExemplo = [
      {
        id: 1,
        nome: "Planilha 1",
        dados: [{ coluna1: "valor1", coluna2: "valor2" }],
      },
      {
        id: 2,
        nome: "Planilha 2",
        dados: [{ coluna1: "valor3", coluna2: "valor4" }],
      },
    ];
    setPlanilha(planilhaExemplo);
  };

  return (
    <div className="App">
      <header>
        <h1>Aplicação de Refletir Planilhas do Excel</h1>
      </header>
      <main>
        <button onClick={carregarPlanilhas}>Carregar Planilhas</button>
        <section>
          <h2>Planilhas</h2>
          <ul>
            {planilhas.map(planilha => (
              <li key={planilha.id}>
                <h3>{planilha.nome}</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Coluna 1</th>
                      <th>Coluna 2</th>
                      {/* Adicione mais colunas conforme necessário */}
                    </tr>
                  </thead>
                  <tbody>
                    {planilha.dados.map((linha, index) => (
                      <tr key={index}>
                        <td>{linha.coluna1}</td>
                        <td>{linha.coluna2}</td>
                        {/* Adicione mais células conforme necessário */}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Sua Empresa. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
