import React from "react";
import {
  CCard,
  CCardBody,
  CCol,
  CDataTable,
  CRow,CSelect,
  CInput,
 CCardHeader,CLabel
} from "@coreui/react";
import "../../../style.css";
import usersData from "../../users/Users_Feedback";

const fields = [
{ key: 'SL No', _style: {backgroundColor: 'rgb(0,0,0)',color:'#fff'} },
 { key: 'User Name', _style: {backgroundColor: 'rgb(0,0,0)',color:'#fff'} },
  { key: 'Merchant', _style: {backgroundColor: 'rgb(0,0,0)',color:'#fff'} },
  { key: 'Mobile', _style: {backgroundColor: 'rgb(0,0,0)',color:'#fff'} },
 { key: 'Date', _style: {backgroundColor: 'rgb(0,0,0)',color:'#fff'} },
 { key: 'OrderNo', _style: {backgroundColor: 'rgb(0,0,0)',color:'#fff'} },
     { key: 'Title', _style: {backgroundColor: 'rgb(0,0,0)',color:'#fff'} },

    { key: 'Description', _style: {backgroundColor: 'rgb(0,0,0)',color:'#fff'} },
  
   ];


const table = { placeholder: "Search here...", label: "Search:  " };
const items = { label: "Rows", values: [5, 10, 25, 50, 75, 100] };

const Store_Reviews= (props) => {

 return (
    <div>
      <h1 id="ccmaster">Merchnat Reviews</h1>
      <CRow>
        <CCol col="10">
          <CCard>
          <CCardHeader>
          <CRow>
                <CCol md="3">
                  <CLabel htmlFor="nf-email">Select Marchant</CLabel>
                  <CSelect custom name="Marchant" id="Marchant">
                              <option value="0">Marchant</option>
                              <option value="1">Option #1</option>
                              <option value="2">Option #2</option>
                              <option value="3">Option #3</option>
                     </CSelect>
                </CCol>
                <CCol md="3">
                  <CLabel>From:</CLabel>
                  <CInput type="date"></CInput>

                </CCol> 
                
                <CCol md="3">
                  <CLabel>To:</CLabel>
                  <CInput type="date"></CInput>
                </CCol> 
              </CRow>
          </CCardHeader>
            <CCardBody>
              <CDataTable
                items={usersData}
                fields={fields}
                hover
                striped
                bordered
                sorter
                tableFilter={table}
                itemsPerPage={4}
                pagination
                size="sm"
                itemsPerPageSelect={items}
                scopedSlots={{
               
              
                }}
              />

            
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  );
};

export default Store_Reviews
;
