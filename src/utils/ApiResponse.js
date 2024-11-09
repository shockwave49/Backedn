class ApiResponse {
    constructor(data, statusCode,message="success"){
        this.data=data
        this.statusCode=statusCode
        this.message=message
        this.success=statusCode<400

    }
}

export {ApiResponse}