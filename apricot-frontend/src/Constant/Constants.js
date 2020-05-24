
const Constants = () => {
    const api_base =  "http://localhost:8080/api/";
    const api_company = "company/";
    const api_user = "user/";
    const api_store = {
        company: {
            //{/user_id}
            viewCompany : api_base + api_company

        }
    }
    return api_store;
}

export default Constants