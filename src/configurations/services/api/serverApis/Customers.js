import Request from "../Request"

const customers = (() => {
    const resource = "/customers";
    return {
        create: body => Request.post(`${resource}`, body),
        fetchAll: params => Request.get(`${resource}`, params),
        update: body => Request.put(`${resource}`, body),
    }
})()

export default customers;