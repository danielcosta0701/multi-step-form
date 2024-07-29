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
            title: 'Sobre',
            html: `
              <div class="footer-modal-content">
                <div><strong>Telefone:</strong> (11) 97681-4472</div>
                <div><strong>E-mail:</strong> danielcosta.dev@outlook.com</div>             
                <div><strong>Github:</strong> <a href="https://github.com/danielcosta0701/multi-step-form" target="_blank">github.com/danielcosta0701</a></div>
                <div>
                    <strong>Tecnologias:</strong>
                    React.js • TypeScript • SASS • Context API • React-Hook-Form • Sweet Alert 2 • React-Input-Mask • Git
                </div>   
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
