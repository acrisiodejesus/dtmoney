import { useTransactions } from "../../hooks/TransactionsContext";

import { Container } from "./styles";



export function TransactionsTable() {
  const { transactions } = useTransactions();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>

          {
            transactions.map(transactions => (
              <tr key={transactions.id}>
                <td>{transactions.title}</td>
                <td className={transactions.type}>
                  {new Intl.NumberFormat('pt-MZ', {
                    style: 'currency',
                    currency: 'MZN'
                  }).format(transactions.amount)}
                </td>
                <td>{transactions.category}</td>
                <td>{new Intl.DateTimeFormat('pt-MZ', {}).format(new Date(transactions.createdAt))}</td>
              </tr>

            ))
          }


        </tbody>
      </table>
    </Container>
  )
}