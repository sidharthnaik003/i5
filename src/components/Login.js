import { Link } from "react-router-dom";

const Login = () => {
  return (
  <>
  <br></br>
    <div class="container">
  <div class="row">
      <div class="col-md-4 col-sm-12"></div>
      <div class="col-md-4 col-sm-12">
      <div class="col">
        <div class="card bg-secondary">
          <div class="card-body">
            <h5 class="card-title">Login</h5>
            <form>
              <div class="mb-3">
                <label for="exampleInputname" class="form-label">Username</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                <div id="emailHelp" class="form-text">We'll never share your details with anyone else.</div>
              </div>
              <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Password</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                  <div id="emailHelp" class="form-text">Enter your password</div>
              </div>  
              <div class="mb-3 form-check">
                   <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                  <label class="form-check-label" for="exampleCheck1"><Link to="/">Register</Link></label>
              </div>
              <button type="submit" class="btn btn-success"><Link to="/">Home</Link></button>
            </form>
          </div>
        </div>
      </div>
      </div>
  </div>
 </div>
  </>);
};

export default Login;