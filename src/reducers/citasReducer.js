import { MOSTRAR_CITAS, AGREGAR_CITA, BORRAR_CITA } from '../actions/types';

//state inicial, cada reducer debe tener su propio state
const initialState = {
    citas: []
}

export default function (state = initialState, action) {
    switch(action.type) {
        case MOSTRAR_CITAS:
            return {
                ...state
            }
            default:
                return state;
    }
}