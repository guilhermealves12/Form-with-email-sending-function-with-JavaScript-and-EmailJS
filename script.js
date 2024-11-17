// Inicializa o EmailJS
// Substitua 'YOUR_PUBLIC_KEY' pela sua chave pública do EmailJS
emailjs.init("PHqRZrrlldM33uEwz")

document
  .getElementById("emailForm")
  .addEventListener("submit", function (event) {
    event.preventDefault()

    const userEmail = document.getElementById("userEmail").value
    const messageDiv = document.getElementById("message")

    // Configura os parâmetros do email
    const templateParams = {
      to_email: "guilhermedahora.estudos@gmail.com", // Substitua pelo seu email empresarial
      from_email: userEmail,
      message: `Novo cadastro de email: ${userEmail}`,
    }

    // Envia o email usando EmailJS
    // Substitua 'YOUR_SERVICE_ID' e 'YOUR_TEMPLATE_ID' pelos seus IDs do EmailJS
    emailjs.send("service_mngjr0g", "template_4zvasof", templateParams).then(
      function (response) {
        messageDiv.textContent = "Email cadastrado com sucesso!"
        messageDiv.className = "message success"
        document.getElementById("userEmail").value = ""
      },
      function (error) {
        messageDiv.textContent = "Erro ao cadastrar email. Tente novamente."
        messageDiv.className = "message error"
        console.error("Erro:", error)
      }
    )

    function isValidEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return re.test(email)
    }

    // No seu evento submit
    if (!isValidEmail(userEmail)) {
      messageDiv.textContent = "Por favor, insira um email válido"
      messageDiv.className = "message error"
      return
    }
  })
