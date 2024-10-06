import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  background-color: #f5f5f5; /* Fondo gris claro */
  color: #121212; /* Texto negro */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #00c6ff; /* Celeste */

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Button = styled.button`
  background-color: #00c6ff; /* Celeste */
  color: #ffffff; /* Blanco */
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #00a3cc; /* Celeste más oscuro */
  }

  &:focus {
    outline: none;
  }

  &:active {
    background-color: #008fb3; /* Celeste aún más oscuro */
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 0.875rem;
  }
`;

export const ChartContainer = styled.div`
  width: 100%;
  max-width: 900px;
  height: 500px;
  background-color: #ffffff; /* Fondo blanco */
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    height: 300px;
    padding: 10px;
  }
`;