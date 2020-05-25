
const Constants = () => {
    const api_base =  "http://localhost:8080/api/";
    const api_company = "company/";
    const api_user = "user/";
    const api_category = "category/"
    return {
        company: {
            //{/user_id}
            viewCompany: api_base + api_company,
            postCompany: api_base + api_company + 'post/',
            postCurrentCompany: api_base + api_company + 'post/' + 'current/',
            deleteCompany: api_base + api_company + 'delete/'

        },
        user:{
            authentication: api_base+api_user+ 'auth/'
        },
        category:{
            //{/company_id}
            viewCategory: api_base + api_category,
            postCategory: api_base + api_category + 'post/'
        }
    };
}

export default Constants