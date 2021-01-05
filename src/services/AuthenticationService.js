import axios from "axios";


class AuthenticationService {
  signin = (username, password) => {
      return axios.post("/api/auth/signin", {username, password})
        .then(response => {
          if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
          }
          return response.data;
        })
        .catch(err => {
          console.log(err);
          throw err;
        });
  }

  signOut() {
    localStorage.removeItem("user");
  }
  
  register = async(firstname, lastname, username, email, password) => {
    return axios({
      method: "post",
      url : "http://localhost:5000/api/user/register",
      data: {
        Username : username,
        Email : email,
        Password : password,
        NewPassword : "",
        FirstName : firstname,
        LastName : lastname
      },
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*"
      }
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthenticationService();