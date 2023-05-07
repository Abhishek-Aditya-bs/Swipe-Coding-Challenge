import { ADD_INVOICE, UPDATE_INVOICE, DELETE_INVOICE } from './actions';

const initialState = {
    invoices: [],
  };

  const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_INVOICE:
          return { ...state, invoices: [...state.invoices, action.payload] };
        case UPDATE_INVOICE:
          const newEditedInvoices = state.invoices.map((invoice) =>
            invoice.invoiceId === action.payload.id ? action.payload.updatedInvoice : invoice
          );
          return {
            ...state,
            invoices: newEditedInvoices,
          };
        case DELETE_INVOICE:
          const newInvoices = state.invoices.filter(
            (invoice) => invoice.invoiceId !== action.payload
          );
          return {
            ...state,
            invoices: newInvoices,
          };
        default:
          return state;
      }
    };
    
    export default reducer;