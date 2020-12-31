const TableBody = (props) => {
    const rows = props.characterData.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.Accountnimi}</td>
          <td>{row.Hahmo}</td>
          <td>{row.Hahmoluokka}</td>
          <td>{row.Rooli}</td>
          <td><button onClick={() => props.removeCharacter(index)}>Delete</button></td>
        </tr>
      )
    })
  
    return <tbody>{rows}</tbody>
  }
export default TableBody;