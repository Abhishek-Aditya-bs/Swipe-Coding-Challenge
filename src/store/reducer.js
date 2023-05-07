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
          console.log('DELETE_INVOICE in reducer:', action.payload);
          const newInvoices = state.invoices.filter(
            (invoice) => invoice.invoiceId !== action.payload
          );
          console.log('New invoices:', newInvoices);
          return {
            ...state,
            invoices: newInvoices,
          };
        default:
          return state;
      }
    };
    
    export default reducer;