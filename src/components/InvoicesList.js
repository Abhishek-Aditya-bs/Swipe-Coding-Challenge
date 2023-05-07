import React from 'react';
import { connect } from 'react-redux';
import { deleteInvoice } from '../store/actions';
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
        };
    }
    handleShowModal = () => {
        this.setState({ showModal: true });
      };
      
      handleCloseModal = () => {
        this.setState({ showModal: false });
      };

      handleDeleteInvoice(invoiceId) {
        this.props.deleteInvoice(invoiceId);
      }
    render() {
        const { invoices } = this.props;
        return (
        <div style={{ marginBottom: '10px' }}>
        <Button variant="primary" type="submit" className="d-block w-10" onClick={this.handleShowModal}>
        View List of Invoices
        </Button>
        <Modal show={this.state.showModal} onHide={this.handleCloseModal} size="lg" centered contentClassName="custom-modal-width"
            key={invoices.length}>
        <Modal.Header closeButton>
          <Modal.Title>List of Invoices</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <table className="table invoice-table">
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
                <td><AiFillEdit style={{height: '33px', width: '33px', padding: '7.5px'}}>Edit</AiFillEdit></td>
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
      </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      invoices: state.invoices,
    };
  };
  
  export default connect(mapStateToProps, { deleteInvoice })(InvoicesList);