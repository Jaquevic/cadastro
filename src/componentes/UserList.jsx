export default function UserList({ usuarios }) {
  if (usuarios.length === 0) {
    return <p>Nenhum usuário cadastrado ainda.</p>
  }

  return (
    <ul>
      {usuarios.map((usuario, index) => (
        <li key={index}>
          <strong>{usuario.nome}</strong> - {usuario.email}
        </li>
      ))}
    </ul>
  )
}
