import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

export const showSuccessToast = (message: string) => {
  MySwal.fire({
    icon: 'success',
    title: message,
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    customClass: {
      container: 'swal-toast-container',
    },
  });
};
