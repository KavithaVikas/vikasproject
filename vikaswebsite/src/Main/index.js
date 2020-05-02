import React, { useState } from 'react';
import Button from '../Button';
import * as customerApi from '../api/fetchData';


function Main() {
    const [customerDetails, setCustomerDetails] = useState([]);
    function onButtonSubmit(event) {
        event.preventDefault();
        console.log("yes");
        const data = customerApi.getCustomerDetails();
        console.log("data", data.mockData);
        setCustomerDetails(data.mockData);
    }

    return (
        <>
            <Button onSubmit={onButtonSubmit} />
            {customerDetails.length > 0 && <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Customer Id</th>
                        <th scope="col">Customer Name</th>
                        <th scope="col">Customer Pan</th>
                    </tr>
                </thead>
                <tbody>
                    {customerDetails.map((customer, index) => {
                        return (<tr>
                            <th scope="row">{index}</th>
                            <td>{customer.customerId}</td>
                            <td>{customer.customerName}</td>
                            <td>{customer.customerPan}</td>
                        </tr>)
                    })}


                </tbody>
            </table>}


        </>
    )
}

export default Main;