// this belongs to c DB
let url  = 'http://18.188.66.126:8888/';
//let url = "http://localhost:6003/";

export let apiService = {
      login: url +'login?id=',
      signUp: url + 'signUp',
      getllDocsForAdminApproveOrReject: url + 'getAll',
      updateLogin:url +'update',
      createUserColletionDB: url + 'createUserColletion',
      orgLevelEmplpyeeList: url +  'getAll',
      updateOrgData: url +  'update',
      delete : url + 'delete'
}

