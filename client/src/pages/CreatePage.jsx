import React from 'react';

function CreatePage(props) {
    return (
        <div className="container mt-5">
            <div className="row">
                <form onSubmit={}>
                    <div className="col-4">
                        <label>Title</label>
                        <input type="text" placeholder="Title"/>
                    </div>
                    <div className="col-4">
                        <label>Title</label>
                        <input type="text" placeholder="Title"/>
                    </div>
                    <div className="col-md-4">
                        <label>Title</label>
                        <input className="form-control form-control-sm" type="text" placeholder="Title"/>
                    </div>
                    <div className="col-md-4">
                        <label>Price</label>
                        <input className="form-control form-control-sm" type="number" placeholder="price"/>
                    </div>
                    <div className="col-md-4">
                        <label>Discount</label>
                        <input className="form-control form-control-sm" type="text" placeholder="discount"/>
                    </div>
                    <div className="col-md-4">
                        <label>Discount Price</label>
                        <input className="form-control form-control-sm" type="number" placeholder="Discount Price"/>
                    </div>

                </form>

            </div>
        </div>
    );
}

export default CreatePage;