
const Constants = () => {
    const api_base =  "api/";
    const api_company = "company/";
    //const api_user = "user/";
    return {
        company: {
            //{/user_id}
            viewCompany: api_base + api_company,
            postCompany: api_base + api_company + 'post/',
            deleteCompany: api_base + api_company + 'delete/'
        }
    };
}

export default Constants