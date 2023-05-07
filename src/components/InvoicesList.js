import React from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';

// const InvoicesList = ({ invoices }) => {
//   return (
//     <div>
//       <h2>List of Invoices:</h2>
//       <ul>
//         {invoices.map((invoice) => (
//           <li key={invoice.invoiceId}>
//             Invoice ID: {invoice.invoiceId} | Billed To: {invoice.billedTo} | Total: {invoice.total}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

class InvoicesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            invoices: this.props.invoices,
        }
    }
    render() {
        return (
            <div style={{marginBottom: '10px'}}>
            <Button variant="success" type="submit" className="d-block w-10" onClick={console.log("YAY!")}>View List of Invoices </Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      invoices: state.invoices,
    };
  };
  
  export default connect(mapStateToProps)(InvoicesList);