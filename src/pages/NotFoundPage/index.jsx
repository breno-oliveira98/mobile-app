import React from 'react';
import { Link } from 'react-router-dom'; // Para navegação, caso você queira incluir um link para voltar à página inicial ou outras páginas.

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-6xl font-bold text-red-600">404</h1>
        <h2 className="text-2xl text-gray-800">Página Não Encontrada</h2>
        <p className="text-gray-600 mt-4">
          Desculpe, a página que você está procurando não existe ou foi movida.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Voltar para a Página Inicial
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
