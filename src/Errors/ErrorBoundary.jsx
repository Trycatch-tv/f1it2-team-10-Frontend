import React from 'react';

function ErrorBoundary({ children }) {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Algo salió mal.</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

// manejar errores en diferentes niveles de la aplicación 
// Los límites de error en React son una forma de manejar los errores en una 
//aplicación, lo que le permite reaccionar y recuperarse de los errores de 
// tiempo de ejecución y proporcionar una interfaz de usuario alternativa 