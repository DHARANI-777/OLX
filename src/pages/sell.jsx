import React from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../components";
const sell = () => {
    
      
   
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3 bg-light">
        <h1 className="text-center">Add your products to sell</h1>
        <hr />
        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form>
              <div class="form my-3">
                <label for="Name"> Product Name</label>
                <input
                  type="email"
                  class="form-control"
                  id="Name"
                  placeholder="Enter your product "
                />
              </div>
              <div class="form my-3">
                <label for="Email">Price</label>
                <input
                  type=""
                  class="form-control"
                  id="Email"
                  placeholder="Enter Price"
                />
              </div>
              <div class="form  my-3">
                <label for="Password">Product Description</label>
                <textarea
                  rows={7}
                  class="form-control"
                  id="Password"
                  placeholder=" Describe your product "
                />
              </div>
              <div>
             <input
               type="file"/>
          </div>
             <div className="text-center">
              <button class="my-2 mx-auto btn btn-dark" type="submit" >
              <Link to="/Home" className="text-decoration-none text-info">Submit</Link>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default sell;

