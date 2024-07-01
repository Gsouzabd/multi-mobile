import React from 'react';

// Definindo a interface para as props do componente
interface Props {
  logo: string; // Tipo string para o caminho da imagem da logo
}

const Header: React.FC<Props> = ({ logo }) => {
  return (
    <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', padding: '10px' }}>
      <img src={logo} alt="Logo" style={{ height: '50px' }} />
      {/* Adicione mais elementos ao cabeçalho conforme necessário */}
    </header>
  );
};

export default Header;