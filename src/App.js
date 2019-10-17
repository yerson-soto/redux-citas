import React, { Component } from 'react';
import Header from './componentes/Header';
import AgregarCita from './componentes/AgregarCita';
import ListaCitas from './componentes/ListaCitas';

//Redux
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
    state = {  
        citas: []
    }

    componentDidMount() {
        const citasLS = localStorage.getItem('citas');
        if(citasLS) {
            this.setState({
                citas: JSON.parse( citasLS )
            });
        }
    }

    componentDidUpdate() {
        localStorage.setItem(
            'citas',
            JSON.stringify(this.state.citas )
        );
    }

    crearCita = nuevaCita => {
        
        const citas = [...this.state.citas, nuevaCita];

        this.setState({
            citas
        })
    }

    borrarCita = id => {
        console.log(id);
        //crear el state
        const citasActuales = [...this.state.citas];
       
        //borrar el elemento del state
        const citas = citasActuales.filter(cita => cita.id !== id);
        
        //Actualizar el state
        this.setState({
            citas
        });
    }

    render() { 
        return (  
            <Provider store={store}>
                <div className="container">
                    <Header
                        titulo={"Administrador de Pacientes de Veterinaria"}
                    />

                    <div className="row">
                        <div className="col-md-6">
                            <AgregarCita
                                crearCita={this.crearCita}
                            />
                        </div>

                        <div className="col-md-6">
                            <ListaCitas
                                citas={this.state.citas}
                                borrarCita={this.borrarCita}
                            />
                        </div>
                    </div>
                </div>
            </Provider>
        );
    }
}
 
export default App;
