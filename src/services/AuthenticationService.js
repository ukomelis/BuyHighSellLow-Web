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
  // UserName = requestModel.Username, 
  // Email = requestModel.Email,
  // FirstName = requestModel.FirstName,
  // LastName = requestModel.LastName,
  // Balance = 0
  // api/user/register
  register = async(firstname, lastname, username, email, password) => {
    return axios.post("localhost:5000/api/user/register", {
      firstname,
      lastname,
      username,
      email,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthenticationService();