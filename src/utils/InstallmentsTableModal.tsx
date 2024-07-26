import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import InstallmentsTable from '../components/InstallmentsTable/InstallmentsTable';

export const showInstallmentsTableModal = () => {
  const MySwal = withReactContent(Swal);
  
  MySwal.fire({
    html: <InstallmentsTable />,
    showCloseButton: true,
    showCancelButton: false,
    showConfirmButton: false,
    focusConfirm: false,
    customClass: {
      container: 'swal-container',
    },
    width: '80%',
    heightAuto: true,
  });
};
