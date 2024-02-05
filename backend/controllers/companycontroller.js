const company =require("../models/company");
exports.addcompany= async(req,res)=>{
        try{
            const {company_name,role,ctc,job_id}=req.body;
            const existing = company.find({company_name:company_name,job_id:job_id});
            console.log(existing);
            if(existing)
            {
                return res.status(500).send({
                    success:false,
                    message:"This job Role in this company is already added",
                });
            }
            const result =await new company({company_name:company_name,role:role,ctc:ctc,job_id:job_id});
            await result.save();
            return res.status(200).send({
                success:true,
                message:"Successfully added a company",
            });
        }
        catch(error)
        {
            console.log(error);
            return res.status(501).send({
                success:false,
                message:"Error while adding company",
            });
        }
}

exports.getAllcompany=async(req,res)=>{
    try{
        const data = await company.find({});
        return res.status(200).send({
            success:true,
            size:data.length,
            message:"listed All companies",
            data
        });
    }
    catch(error)
    {
        console.log(error);
        return res.status(404).send({
            success:false,
            message:"Error while getting company",
        });
    }
}

exports.deletecontroller = async(req,res)=>{
    try{
        console.log(req.params);
        const id =req.params.id;
        console.log(id);
        if(!id)
        {
            return res.status(404).send({
                success:false,
                message:"Provide id to delete the job",
            });
        }
        await company.findByIdAndDelete({_id:id});
        return res.status(404).send({
            success:false,
            message:"Successfully Deleted",
        });
    }
    catch(error)
    {
        console.log(error);
        return res.status(404).send({
            success:false,
            message:"Error while deleting company",
        });
    }
}


