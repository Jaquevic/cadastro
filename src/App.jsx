import { useState } from 'react'
import CadastroForm from './components/CadastroForm'
import UserList from './components/UserList'
import Navigation from './components/Navigation'
import PageWrapper from './components/PageWrapper'

export default function App() {
  const [tela, setTela] = useState('cadastro')
  const [usuarios, setUsuarios] = useState([])

  function adicionarUsuario(usuario) {
    setUsuarios([...usuarios, usuario])
  }

  return (
    <PageWrapper>
      <h1>Gerenciamento de Usuários</h1>
      <Navigation onNavigate={setTela} />

      {tela === 'cadastro' ? (
        <CadastroForm onCadastrar={adicionarUsuario} />
      ) : (
        <UserList usuarios={usuarios} />
      )}
    </PageWrapper>
  )
}
