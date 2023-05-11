import api, { baseURL } from "../../utils/api";

export const getPackages = async () => {
    const { data } = await api({
        url: `${baseURL}/user/getPackages`,
        method: "GET",
    });
    console.log('getCategories', data)
    return data?.packages
};
export const addPackages = (data) =>
    api({
        url: `${baseURL}/user/createSubscription`,
        method: "POST",
        data,
    });
    export const getPackageDetails =async (id) =>
    api({
        url: `${baseURL}/user/packageDeail/${id}`,
        method: "GET",
    });

    export const editPackage = (data) =>
    api({
        url: `${baseURL}/user/editPackage`,
        method: "POST",
        data,
    });

    export const deletePackage = (id) =>
    //   console.log('id',id)
      api({
        url: `${baseURL}/user/deletePackage/${id}`,
        method: "GET",
      });
  