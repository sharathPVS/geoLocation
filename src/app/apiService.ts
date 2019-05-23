// this belongs to c DB
let url  = 'http://18.188.66.126:8888/';
//let url = "http://192.168.1.10:6003/";

export let apiService = {
      login: url + 'login?id=',
      signUp: url + 'signUp',
      getllDocsForAdminApproveOrReject: url + 'getAll',
      updateLogin: url + 'update',
      createUserColletionDB: url + 'createUserColletion',
      orgLevelEmplpyeeList: url + 'fetchUserbasedrecords',
      updateOrgData: url + 'update',
      delete: url + 'delete',
      checkUserExists: url + 'checkUserExists?username=',
      geoFetchMobileLocation: url + 'geoFeatch',
      activateUserEmail: url + 'activateUserEmail',
      // sim data
      fetchSimData: url + 'fetchSimData?simNumber=',
      updateSimData: url + 'updateSimData',
      createNewSimdata: url + 'createNewSimdata',
      storeGeoLocation: url + 'StoreGeoLocation'


};
export let values = {
      // store al employees data in single place 
      collection: 'employeeData',
      geoCollection:"geoCollection"

}

