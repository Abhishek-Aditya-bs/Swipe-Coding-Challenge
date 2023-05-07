import { ADD_INVOICE, UPDATE_INVOICE, DELETE_INVOICE } from './actions';

const initialState = {
    invoices: [],
  };

  const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_INVOICE:
          return { ...state, invoices: [...state.invoices, action.payload] };
        case UPDATE_INVOICE:
          return {
            ...state,
            invoices: state.invoices.map((invoice) =>
              invoice.id === action.payload.id ? action.payload.updatedInvoice : invoice
            ),
          };
        case DELETE_INVOICE:
          return {
            ...state,
            invoices: state.invoices.filter((invoice) => invoice.id !== action.payload),
          };
        default:
          return state;
      }
    };
    
    export default reducer;