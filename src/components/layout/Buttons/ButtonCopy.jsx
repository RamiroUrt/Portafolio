import '../styles/ButtonCopy.css';
import { useSound } from '../../../context/UseSound'

const ButtonCopy = ({onCopy }) => {
  const playCopySound = useSound("/sound/copy.mp3", 0.5);
  const textToCopy = "urteagaramiro33@gmail.com";

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        if (onCopy) onCopy();
        else playCopySound();
        alert("Texto copiado al portapapeles");
      })
      .catch((error) => {
        console.error("Error al copiar texto al portapapeles:", error);
        alert("Error al copiar texto");
      });
  };

  const handleCopy = () => {
    copyToClipboard(textToCopy);
  };

  return (
    <>
<button className="btn-copy" onClick={handleCopy}>
  <span
    data-text-end="Copied!"
    data-text-initial="Copy to clipboard"
    className="cp-tooltip"
  ></span>
  <span>
    <svg
      viewBox="0 0 6.35 6.35"
      y="0"
      x="0"
      height="20"
      width="20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className="cp-clipboard"
    >
      <g>
        <path
          fill="currentColor"
          d="M2.43.265c-.3 0-.548.236-.573.53h-.328a.74.74 0 0 0-.735.734v3.822a.74.74 0 0 0 .735.734H4.82a.74.74 0 0 0 .735-.734V1.529a.74.74 0 0 0-.735-.735h-.328a.58.58 0 0 0-.573-.53zm0 .529h1.49c.032 0 .049.017.049.049v.431c0 .032-.017.049-.049.049H2.43c-.032 0-.05-.017-.05-.049V.843c0-.032.018-.05.05-.05zm-.901.53h.328c.026.292.274.528.573.528h1.49a.58.58 0 0 0 .573-.529h.328a.2.2 0 0 1 .206.206v3.822a.2.2 0 0 1-.206.205H1.53a.2.2 0 0 1-.206-.205V1.529a.2.2 0 0 1 .206-.206z"
        ></path>
      </g>
    </svg>
    <svg
      viewBox="0 0 24 24"
      y="0"
      x="0"
      height="18"
      width="18"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className="cp-check-mark"
    >
      <g>
        <path
          data-original="#000000"
          fill="currentColor"
          d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
        ></path>
      </g>
    </svg>
  </span>
</button>

    </>
  )
}

export default ButtonCopy