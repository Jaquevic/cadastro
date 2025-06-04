import { useState } from 'react'

export default function CadastroForm({ onCadastrar }) {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!nome || !email) return alert("Preencha todos os campos!")
    onCadastrar({ nome, email })
    setNome('')
    setEmail('')
    alert("Usuário cadastrado com sucesso!")
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome: </label>
        <input value={nome} onChange={e => setNome(e.target.value)} />
      </div>
      <div>
        <label>Email: </label>
        <input value={email} onChange={e => setEmail(e.target.value)} />
      </div>
      <button type="submit">Cadastrar</button>
    </form>
  )
}
