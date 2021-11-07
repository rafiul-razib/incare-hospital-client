import React from 'react';

const Contact = () => {
    return (
        <div className="container">
            <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Name</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Address</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Write details here</label>
                <textarea type="text-area" class="form-control" id="exampleInputPassword1"/>
            </div>
            
            <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default Contact;