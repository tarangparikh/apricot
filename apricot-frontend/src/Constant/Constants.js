
const Constants = () => {
    const api_base =  "http://localhost:8080/api/";
    const api_company = "company/";
    const api_user = "user/";
    const api_category = "category/"
    const api_product = "product/"
    return {
        company: {
            //{user_id}
            viewCompany: api_base + api_company,
            postCompany: api_base + api_company + 'post/',
            postCurrentCompany: api_base + api_company + 'post/' + 'current/',
            deleteCompany: api_base + api_company + 'delete/'

        },
        user:{
            authentication: api_base+api_user+ 'auth/'
        },
        category:{
            //{company_id}
            viewCategory: api_base + api_category,
            postCategory: api_base + api_category + 'post/',
            deleteCategory: api_base + api_category + 'delete/'
        },
        product:{
            //{company_id}
            viewProduct: api_base + api_product,
            postProduct: api_base + api_product + 'post/',
            //{product_id}
            deleteProduct: api_base + api_product + 'delete/'
        }
    };
}

export default Constants