
let loginData:any ;
let adminLoginFactory: boolean = false;
let geoLocation:any

export let loginUserData = {
    setLoginUserData: function (val) {
        loginData = val;
    },
    getLoginUserData: function () {
        return loginData;
    },
    initialiseLoginUsereDataFactory: function () {
        loginData = "";
    }
};
export let logOutfactory = {
    setAdminLoginFactory: function (val) {
        adminLoginFactory = val;
    },
    getAdminLoginFactory: function () {
        return adminLoginFactory
    },
}

export let geoLocationFactory = {
    setGeoLocationFactory: function (val) {
     geoLocation = val;
    },
    getGeoLocationFactory: function () {
        return geoLocation
    },
}


