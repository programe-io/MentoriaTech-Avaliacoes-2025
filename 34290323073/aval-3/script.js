<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Página do Walisson</title>
        <style>
            body { font-family: Arial; text-align: center; background-color: #e8f0fe; margin: 0; }
                header { background: #004aad; color: white; padding: 20px; }
                    button {
                          padding: 10px 20px;
                                font-size: 16px;
                                      background: #004aad;
                                            color: white;
                                                  border: none;
                                                        border-radius: 8px;
                                                              cursor: pointer;
                                                                  }
                                                                      button:hover { background: #003080; }
                                                                        </style>
                                                                        </head>
                                                                        <body>

                                                                          <header>
                                                                              <h1>Página do Walisson</h1>
                                                                                </header>

                                                                                  <main>
                                                                                      <h2>Interaja com o site!</h2>
                                                                                          <p>Clique no botão para ver uma mensagem:</p>
                                                                                              <button onclick="mostrarMensagem()">Clique Aqui</button>
                                                                                                  <p id="mensagem"></p>
                                                                                                    </main>

                                                                                                      <footer>
                                                                                                          <p>&copy; 2025 Walisson</p>
                                                                                                            </footer>

                                                                                                              <script>
                                                                                                                  function mostrarMensagem() {
                                                                                                                        document.getElementById('mensagem').innerText = "Valeu por clicar! Você é top 😎";
                                                                                                                            }
                                                                                                                              </script>

                                                                                                                              </body>
                                                                                                                              </html>