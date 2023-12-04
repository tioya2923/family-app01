import React, { useState } from "react";
//import AreaPrivada from "../../Pages/area-pessoal";
const AreaPessoal = () => {

  // O estado que armazena o email e a senha digitados pelo usuário
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // A função que é chamada quando o usuário clica no botão de login
  const handleSubmit = (event) => {
    // Previne o comportamento padrão do formulário
    event.preventDefault();
    // Valida se o email e a senha estão preenchidos
    if (email && password) {
      // Faz uma requisição para a API de autenticação
      fetch("https://api-de-autenticacao.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })
        .then((response) => response.json())
        .then((data) => {
          // Se a autenticação for bem sucedida, salva o token no localStorage
          if (data.token) {
            localStorage.setItem("token", data.token);
            // Redireciona o usuário para a página inicial
            window.location.href = "/";
          } else {
            // Se a autenticação falhar, mostra uma mensagem de erro
            alert(data.message);
          }
        })
        .catch((error) => {
          // Se ocorrer algum erro na requisição, mostra uma mensagem de erro
          alert(error.message);
        });
    } else {
      // Se o email ou a senha estiverem vazios, mostra uma mensagem de erro
      alert("Por favor, preencha o email e a senha");
    }
  };

  // A função que é chamada quando o usuário digita algo no campo de email
  const handleEmailChange = (event) => {
    // Atualiza o estado do email com o valor digitado
    setEmail(event.target.value);
  };

  // A função que é chamada quando o usuário digita algo no campo de senha
  const handlePasswordChange = (event) => {
    // Atualiza o estado da senha com o valor digitado
    setPassword(event.target.value);
  };

  // Retorna o elemento JSX que representa o formulário de login
  return (
    <div className="login-form">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default AreaPessoal;