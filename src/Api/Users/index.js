import api, { baseURL } from "../../utils/api";

export const getUsers = async (page, perPage, from, to, searchString, sort,userstatus) => {
    const { data } = await api({
        url: `${baseURL}/user/logs`,
        method: "GET",
        params: {
            page,
            perPage,
            searchString,
            from,
            to,
            sort,
            status:userstatus
        },
    });
    console.log('getUsersdata', data?.user)
    return data?.user
};
export const getPayments = async (page, perPage, from, to, sort) => {
    const { data } = await api({
        url: `${baseURL}/user/paymentlogs`,
        method: "GET",
        params: {
            page,
            perPage,
            from,
            to,
            sort,
        },
    });
    console.log('getUsersdata', data?.payment)
    return data?.payment
};
export const changeStatus = (id) =>
    api({
        url: `${baseURL}/user/toggle-active/${id}`,
        method: "GET",
    });

    export const getUserDetails =async (id) =>{
        const {data}=await api({
             url: `${baseURL}/user/getUserDetails/${id}`,
             method: "GET",
         })
         console.log('data',data)
     return data?.user
     }
     export const handleGetDashboarddata = async (year
         ) => {
        const { data } = await api({
            url: `${baseURL}/user/getCountofallCollection`,
            method: "GET",
            params: {
                year,
                
            }
        });
        console.log('getCategories', data)
        return data
    };
    export const notificationLogs = async (page, perPage, from, to, ) => {
        const { data } = await api({
            url: `${baseURL}/user/notificationlogs`,
            method: "GET",
            params: {
                page,
                perPage,
                from,
                to,
    
            },
    
        });
        return data?.notification
    
    };