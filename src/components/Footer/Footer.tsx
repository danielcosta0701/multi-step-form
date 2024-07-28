import './Footer.scss';
import Swal from 'sweetalert2';

interface FooterProps {
    text: string;
    className?: string;
}

const Footer = (props: FooterProps) => {
    const {
        text,
        className
    } = props;

    const handleFooterModal = () => {
        Swal.fire({
            title: 'Informações para contato',
            html: `
              <div class="footer-modal-content">
                <div><strong>Telefone:</strong> (11) 97681-4472</div>
                <div><strong>E-mail:</strong> danielcosta.dev@outlook.com</div>
                <div><strong>Github:</strong> <a href="https://github.com/danielcosta0701" target="_blank">github.com/danielcosta0701</a></div>
              </div>
            `,
            showConfirmButton: false,
            showCloseButton: true,
            customClass: {
              title: 'footer-modal-title',
              htmlContainer: 'footer-modal-content'
            }
          });
    }

    return (
        <footer className={`footer ${className}`}>
            <div className="footer-content">
                <a onClick={handleFooterModal}>{text}</a>
            </div>
        </footer>
    );
}

export { Footer };
