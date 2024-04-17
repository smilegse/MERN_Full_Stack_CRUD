import {useEffect, useState} from "react";
import axios from "axios";
import Loader from "../loader/Loader.jsx";
import {Link} from "react-router-dom";
import toast from "react-hot-toast";

const HomePage = () => {
    let [Data, SetData] = useState([]);

    useEffect(() => {
        (async ()=>{
            await ReadData();
        })()
    }, []);

    const ReadData = async ()=>{
        let res = await axios.get('/api/read');
        SetData(res.data['row']);
    }

    const DeleteData = async (id) =>{
        // alert(id)
        let res = await axios.get(`api/delete/${id}`)
        if(res.data['status'] === 'Success'){
            toast.success('Product Deleted!')
            await ReadData();
        }else
        {
            toast.error('Request Failed!')
        }
    }


    return (
        <div className="container">
            <Link to="/Create" className="btn btn-primary btn-sm">Create</Link>
            <div className="row">
                <div className="col-md-12">
                    <h1>Read page</h1>
                    <table className="table table-">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Discount</th>
                                <th>Discount Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Data.length === 0? <Loader/> :
                                Data.map((item,i)=> {
                                    return (
                                        <tr key={i}>
                                            <td>{item['title']}</td>
                                            <td>{item['price']}</td>
                                            <td>{item['discount']}</td>
                                            <td>{item['discount_price']}</td>
                                            <td>
                                                <button className="btn btn-success btn-sm w-25">Edit</button>  &nbsp;
                                                <button onClick={()=> DeleteData(item['_id'])} className="btn btn-danger btn-sm w-25">Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
        ;
};

export default HomePage;