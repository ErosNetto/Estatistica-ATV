import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="contato">
      <h2 className="footerStudents">Membros da equipe</h2>
      <div className="footerDiv">
        <div className="footerDivItem">
          <div className="footerdDivColuna">
            <h3>Eros Netto Antuens</h3>
            <p>RA: 2023200550</p>
          </div>
        </div>
        <div className="footerDivItem">
          <div className="footerdDivColuna">
            <h3>Gabriel Schultz do Amaral </h3>
            <p>RA: 2024100666</p>
          </div>
        </div>
        <div className="footerDivItem">
          <div className="footerdDivColuna">
            <h3>Vitor Hugo Kuerten Dechamps</h3>
            <p>RA: 2024100726</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
