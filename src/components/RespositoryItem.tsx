interface RepositoryItemProps{
  repository: {
    name: String;
    description: string;
    html_url: string;
  }
}

export function RepositoryItem(props: RepositoryItemProps){
  return (
    <li>
    <strong>{props.repository?.name ?? 'Repositório sem descrição'}</strong>
    <p>{props.repository?.description ?? 'Vacilo, não tem nada aqui :('}</p>

    <a href={props.repository?.html_url}>
      Acessar links
    </a>
  </li>    
  )
}