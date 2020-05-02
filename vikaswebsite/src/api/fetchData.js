import { handleResponse, handleError } from "./utils";

// const baseUrl = "https://rsboard.azurewebsites.net/proxy/git_repos/commits";

export function getCustomerDetails() {
    // return fetch(baseUrl)
    //     .then(handleResponse)
    //     .catch(handleError);

    return ({
        mockData: [{
            customerId: "AB123",
            customerName: "Vikas",
            customerPan: "12345"
        },
        {
            customerId: "BC123",
            customerName: "Kavitha",
            customerPan: "67890"

        },
        {
            customerId: "CA123",
            customerName: "Prajwal",
            customerPan: "111213"

        }]
    })
}