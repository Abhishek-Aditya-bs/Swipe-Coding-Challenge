export const ADD_INVOICE = 'ADD_INVOICE';
export const UPDATE_INVOICE = 'UPDATE_INVOICE';
export const DELETE_INVOICE = 'DELETE_INVOICE';

// Action Creators
export const addInvoice = (invoice) => ({
  type: ADD_INVOICE,
  payload: invoice,
});

export const updateInvoice = (id, updatedInvoice) => ({
  type: UPDATE_INVOICE,
  payload: { id, updatedInvoice },
});

export const deleteInvoice = (id) => ({
  type: DELETE_INVOICE,
  payload: id,
});