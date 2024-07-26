import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import InstallmentsTable from '../components/InstallmentsTable/InstallmentsTable';

export const showInstallmentsTableModal = () => {
    const MySwal = withReactContent(Swal).fire({
    title: 'Tabela de Juros por Parcelas',
    html: <InstallmentsTable />,
    showCloseButton: true,
    showCancelButton: false,
    focusConfirm: false,
    confirmButtonText: 'Fechar',
    customClass: {
      container: 'swal-container',
    },
    width: '80%',
    heightAuto: true,
  });
};
