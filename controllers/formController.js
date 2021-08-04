const formController=(req,res)=>{
    console.log(req.body.username);
    console.log(req.body.password);
    obj={u:req.body.username,p:req.body.password}

    res.render("login",obj);
}

module.exports={formController};