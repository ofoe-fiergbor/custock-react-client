const Response = async(response) =>{
    return response.catch( error => {
        if(error.response) {
            return{
                status: error.response.status,
                message: error.response.data,
            }
        }

        return {
            message:error.message,
            data: null,
        }
    })
}

export default Response;