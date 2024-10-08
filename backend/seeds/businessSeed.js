const business = [
    {
    user_id : 1, // Need Foreign Key
    business_name : "Business Name",
    description : "Business Description",
    address : "Business Address",
    email : "Business Email",
    phone : "Business Phone",
    website : "Business Website",
}]


export const createBusiness = async function createBusiness(db) {
    for (const biz of business) {
        await db.business
            .create({
                user_id: biz.user_id,
                business_name: biz.business_name,
                description: biz.description,
                address: biz.address,
                email: biz.email,
                phone: biz.phone,
                website: biz.website,
            }
        );
    }
}