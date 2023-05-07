import React from 'react';
import { connect } from 'react-redux';
import { deleteInvoice, updateInvoice } from '../store/actions';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './InvoiceList.css';
import { BiTrash } from "react-icons/bi";
import { AiFillEdit } from "react-icons/ai";

class InvoicesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            showEditModal: false,
            selectedInvoice: '',
            refreshModal: false,
        };
    }
    handleShowModal = () => {
        this.setState({ showModal: true });
    };
      
    handleCloseModal = () => {
        this.setState({ showModal: false, refreshModal: false });
    };

    handleDeleteInvoice(invoiceId) {
        this.props.deleteInvoice(invoiceId);
    };

    handleEditCloseModal = () => {
        this.setState({ showEditModal: false});
    };

    handleEditSubmission = (event) => {
        event.preventDefault();
        const { selectedInvoice } = this.state;
        const newInvoice = {
            invoiceId: selectedInvoice.invoiceId,
            items: selectedInvoice.items,
            billedFrom: event.target.billedFrom.value,
            billedTo: event.target.billedTo.value,
            dateOfIssue: event.target.dateOfIssue.value,
            subTotal: event.target.subTotal.value,
            tax: event.target.tax.value,
            discount: event.target.discount.value,
            total: parseFloat(event.target.subTotal.value) + parseFloat(event.target.tax.value) - parseFloat(event.target.discount.value),
        }
        this.props.updateInvoice(newInvoice.invoiceId, newInvoice);
        this.setState({showEditModal: false, selectedInvoice: ''});
    };

    componentDidUpdate(prevProps) {
        if (prevProps.invoices !== this.props.invoices) {
          this.setState({ refreshModal: true });
        }
      }

    render() {
        const { invoices } = this.props;
        return (
        <div style={{ marginBottom: '10px' }}>
        <Button variant="primary" type="submit" className="d-block w-10" onClick={this.handleShowModal}>
        View List of Invoices
        </Button>
        <Modal show={this.state.showModal} onHide={this.handleCloseModal} size="lg" centered contentClassName="custom-modal-width"
            key={[invoices.length]}>
        <Modal.Header closeButton>
          <Modal.Title>List of Invoices</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <table className="table invoice-table" key={this.state.refreshModal}>
            <thead>
            <tr>
                <th>Invoice ID</th>
                <th>Billed From</th>
                <th>Billed To</th>
                <th>Date of Issue</th>
                <th>Sub Total</th>
                <th>Tax</th>
                <th>Discount</th>
                <th>Total</th>
                <th></th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {invoices.map((invoice) => (
                <tr key={invoice.invoiceId}>
                <td>{invoice.invoiceId}</td>
                <td>{invoice.billedFrom}</td>
                <td>{invoice.billedTo}</td>
                <td>{invoice.dateOfIssue}</td>
                <td>{invoice.currency}{invoice.subTotal}</td>
                <td>{invoice.currency}{invoice.tax}</td>
                <td>{invoice.currency}{invoice.discount}</td>
                <td>{invoice.currency}{invoice.total}</td>
                <td><AiFillEdit style={{height: '33px', width: '33px', padding: '7.5px'}} onClick={() => {
                this.setState({ selectedInvoice: invoice, showEditModal: true})}}>Edit</AiFillEdit></td>
                <td><BiTrash style={{height: '33px', width: '33px', padding: '7.5px'}} className="text-white mt-1 btn btn-danger" 
                        onClick={() => this.handleDeleteInvoice(invoice.invoiceId)}/></td>
                </tr>
            ))}
            </tbody>
        </table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={this.state.showEditModal} onHide={this.handleEditCloseModal} size="lg" centered contentClassName="custom-modal-width"> 
      <Modal.Header closeButton>
          <Modal.Title>Edit Invoice - {this.state.selectedInvoice.invoiceId}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={this.handleEditSubmission}>
        <div className="form-group">
            <label htmlFor="billedFrom">Billed From</label>
            <input type="text" className="form-control" name="billedFrom" placeholder="Enter Billed From" 
            defaultValue={this.state.selectedInvoice.billedFrom}/>
        </div>
        <div className="form-group">
            <label htmlFor="billedTo">Billed To</label>
            <input type="text" className="form-control" name="billedTo" placeholder="Enter Billed To" 
            defaultValue={this.state.selectedInvoice.billedTo}/>
        </div>
        <div className="form-group">
            <label htmlFor="dateOfIssue">Date of Issue</label>
            <input type="date" className="form-control" name="dateOfIssue" placeholder="Enter Date of Issue" 
            defaultValue={this.state.selectedInvoice.dateOfIssue}/>
        </div>
        <div className="form-group">
            <label htmlFor="subTotal">Sub Total</label>
            <input type="number" className="form-control" name="subTotal" placeholder="Enter Sub Total" 
            defaultValue={this.state.selectedInvoice.subTotal}/>
        </div>
        <div className="form-group">
            <label htmlFor="tax">Tax</label>
            <input type="number" className="form-control" name="tax" placeholder="Enter Tax" 
            defaultValue={this.state.selectedInvoice.tax}/>
        </div>
        <div className="form-group">
            <label htmlFor="discount">Discount</label>
            <input type="number" className="form-control" name="discount" placeholder="Enter Discount" 
            defaultValue={this.state.selectedInvoice.discount}/>
        </div>
        <div style={{marginTop: '10px'}}>
        <button type="submit" className="btn btn-primary">Submit</button>
        </div>
        </form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={this.handleEditCloseModal}>
                Close
            </Button>
        </Modal.Footer>
      </Modal>
      </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      invoices: state.invoices,
    };
  };
  
export default connect(mapStateToProps, { deleteInvoice, updateInvoice })(InvoicesList);