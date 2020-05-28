
const Constants = () => {
    const api_base =  "http://localhost:8080/api/";
    const api_company = "company/";
    const api_user = "user/";
    const api_category = "category/";
    const api_product = "product/";
    const api_party = "party/";
    const api_purchaseOrder = "purchaseOrder/"
    return {
        company: {
            //{user_id}
            viewCompany: api_base + api_company,
            postCompany: api_base + api_company + 'post/',
            postCurrentCompany: api_base + api_company + 'post/' + 'current/',
            deleteCompany: api_base + api_company + 'delete/'

        },
        user:{
            authentication: api_base+api_user+ 'auth/',
            postUser: api_base+api_user+'post/',
            viewUser: api_base + api_user
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
        },
        party:{
            //{company_id}
            viewParty: api_base + api_party,
            postParty: api_base + api_party + 'post/',
            deleteParty: api_base + api_party + 'delete/'
        },
        purchase:{
            //{company_id}
            viewPurchaseOrder: api_base + api_purchaseOrder,
            postPurchaseOrder: api_base + api_purchaseOrder + 'post/'
        }
    };
}

export default Constants