export default function Navigation({ onNavigate }) {
  return (
    <nav style={{ marginBottom: 20 }}>
      <button onClick={() => onNavigate('cadastro')}>Cadastrar</button>
      <button onClick={() => onNavigate('lista')}>Listar</button>
    </nav>
  )
}
