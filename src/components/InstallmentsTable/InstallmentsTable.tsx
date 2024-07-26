import './InstallmentsTable.scss';
import { INSTALLMENTS_MOCK } from '../../mocks/mocks';

const InstallmentsTable = () => {
  return (
    <div className="table-container"> 
      <h2>Tabela de Juros por Parcelas</h2>
      <table>
        <thead>
          <tr>
            <th>Número de Parcelas</th>
            <th>Taxa de Juros (%)</th>
          </tr>
        </thead>
        <tbody>
          {INSTALLMENTS_MOCK.map((installment) => (
            <tr key={installment.id}>
              <td>{installment.label}</td>
              <td>{installment.interest}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InstallmentsTable;
