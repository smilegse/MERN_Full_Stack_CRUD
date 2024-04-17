const ProductModel = require("../model/ProductModel");

exports.Create=async(req,res)=> {
    try {
        let reqBody = req.body;
        await ProductModel.create(reqBody);
        return res.status(200).json({status: 'Success', message: "Request Completed"});
    } catch (e) {
        return res.status(200).json({err: e.toString()});
    }
}


exports.Read=async(req,res)=>{
    try {
        let rows = await ProductModel.find();
        return res.status(200).json({status: 'Success', message: "Request Completed",row: rows});
    } catch (e) {
        return res.status(200).json({err: e.toString()});
    }
}

exports.ReadById=async(req,res)=>{
    try {
        let {id} = req.params;
        let row = await ProductModel.findOne({_id:id});
        return res.status(200).json({status: 'Success', message: "Request Completed",row: row});
    } catch (e) {
        return res.status(200).json({err: e.toString()});
    }
}


exports.Update=async(req,res)=>{
    try {
        let {id}=req.params;
        let reqBody = req.body;
        await ProductModel.updateOne({_id:id}, reqBody);
        return res.status(200).json({status: 'Success', message: "Request Completed"});
    } catch (e) {
        return res.status(200).json({err: e.toString()});
    }
}

exports.Delete=async(req,res)=>{
    try {
        let {id} = req.params;
        await ProductModel.deleteOne({_id:id});
        return res.status(200).json({status: 'Success', message: "Request Completed"});
    } catch (e) {
        return res.status(200).json({err: e.toString()});
    }
}