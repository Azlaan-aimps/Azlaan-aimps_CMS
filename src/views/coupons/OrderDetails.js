import React, {useState} from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CDataTable,
  CLink,
  CButton,
} from '@coreui/react';
import axios from 'axios';
import '../../../src/style.css';
import TAABEDAR_SERVICE from 'src/services/service';
import {useHistory} from 'react-router';

const table = {placeholder: 'Search here...', label: 'Search:  '};
const items = {label: 'Rows:', values: [5, 10, 25, 50, 75, 100]};

const fields = [
  {key: 'shopName'},
  {key: 'merchantType'},
  {key: 'orderNumber'},
  {key: 'totalItems'},
  {key: 'formLocation'},
  {key: 'toLocation'},
  {key: 'orderDescription'},
];

const Pendings = props => {
  const Amount = props.location.state.data.couponAmount;
  const OrderNumber = props.location.state.data.orderNumber;
  const Address = props.location.state.data.userAddress;
  const Phone = props.location.state.data.userMobile;
  const OrderDate = props.location.state.data.availedDate;
  const UserName = props.location.state.data.userName;
  const Orderpkid = props.location.state.data.pkid;

  const [OrderDetails, setOrderDetails] = useState ();
  const [Spkid, setSpkid] = useState ();

  const [value, setValue] = useState ('');

  const onchange = data => {
    setValue (data);
    console.log ('Form>', data);
  };

  const GetOrderDetails = () => {
    axios ({
      method: 'GET',
      url: TAABEDAR_SERVICE + '/GetSubOrderDetailsByOrderNumber/' + OrderNumber,
      headers: {
        'content-type': 'application/json',
      },
      params: {
        language_code: 'en',
      },
    })
      .then (response => {
        setOrderDetails (response.data);
      })
      .catch (error => {
        console.log (error);
      });
  };

  React.useEffect (() => {
    GetOrderDetails ();
  }, []);

  const history = useHistory ();

  return (
    <div>
      <CRow>
        <CCol md="3" />
        <CCol md="6">
          <h1 id="ccmaster">Order Details</h1>
        </CCol>
        <CCol md="3" />
      </CRow>

      <CRow>
        <CCol md="2" />
        <CCol md="12">
          <CCard>
            <CCardBody>
              <CRow>
                <CCol md="1">
                  <CButton
                    color="danger"
                    size="sm"
                    onClick={() => history.goBack ()}
                  >
                    Back
                  </CButton>
                </CCol>
              </CRow>
              <br />
              <CRow>
                <CCol>
                  <CCard>
                    <CCardHeader>Order Details</CCardHeader>
                    <CCardBody>
                      <CRow>
                        <CCol md="6">
                          <p className="p1">Order Number :</p>
                          <p className="p1">Customer Name :</p>
                          <p className="p1">Delivery Address :</p>
                          <p className="p1">Mobile :</p>
                          <p className="p1">Order Date :</p>
                          <p className="p1">Total Amount :</p>
                        </CCol>
                        <CCol md="6">
                          <p className="p2">{OrderNumber}</p>
                          <p className="p2">{UserName}</p>
                          <p className="p2"> {Address}</p>
                          <p className="p2">{Phone}</p>
                          <p className="p2">{OrderDate}</p>
                          <p className="p2">{Amount}</p>
                        </CCol>
                      </CRow>
                      <hr />
                      <CRow>
                        <CCol md="4">
                          <h4 className="p1">Sub Orders</h4>
                        </CCol>
                      </CRow>
                      <br />
                      <CDataTable
                        items={OrderDetails}
                        fields={fields}
                        striped
                        itemsPerPage={10}
                        pagination
                        sorter
                        size="sm"
                        tableFilter={table}
                        itemsPerPageSelect={items}
                        scopedSlots={{
                          totalItems: item => (
                            <td>
                              <CButton
                                id="order-list"
                                onClick={() => {
                                  history.push ('/CouponSubOrderDetails', {
                                    data: {item, Orderpkid},
                                  });
                                }}
                              >
                                {item.totalItems}
                              </CButton>
                            </td>
                          ),
                        }}
                      />
                    </CCardBody>
                  </CCard>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol md="2" />
      </CRow>
    </div>
  );
};

export default Pendings;