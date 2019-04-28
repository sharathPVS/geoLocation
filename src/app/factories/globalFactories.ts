
let loginData: any;
let adminLoginFactory: boolean = false;

export let loginUserData = {
    setLoginUserData: function (val) {
        this.loginDatta = val;
    },
    getLoginUserData: function () {
        return this.loginDatta;
    },
    initialiseLoginUsereDataFactory: function () {
        this.loginData = "";
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


