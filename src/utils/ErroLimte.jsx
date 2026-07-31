import { Component } from 'react';
import Button from '../components/Button/Button';

export class ErroLimite extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Erro capiturado pelo error Boundary', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (<main className="min-h-screen w-screen flex items-center justify-center">
        
          <div className="max-w-sm bg-red-100 flex flex-col gap-4 text-red-600 p-8 rounded-2xl text-center shadow">
            <h2 className="text-bold text-lg">
              Houve algum Erro! veirifque:
              </h2>
            <p className="text-sm">
              {this.state.error?.message}
              </p>
              <Button type="button" onClick={()=> this.setState(false)} variant="danger" text="Tentar Novamente"/>
          </div>
      </main>
      );
    }

    return this.props.children;
  }
}
