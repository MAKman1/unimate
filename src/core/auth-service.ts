import dataService from "./data-service";
import appConstants from "../constants/appConstants";

class AuthService {

    checkLogin(){
        let token = dataService.getItem( appConstants.USER_LOGIN_TOKEN)
    }

    login(){

    }

    signup() {

    }

    forgotPassword() {

    }
}
export default new AuthService();