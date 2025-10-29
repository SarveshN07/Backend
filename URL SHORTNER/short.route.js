import { Router } from "express";
import { nanoid } from "nanoid";
import URL from "./url.model.js";

const shortRouter = Router();

shortRouter.post("/url",  async (req,res) =>{
    const { url , originalUrl} = req.body;

    const existingUrl =  await URL.findOne({originalUrl});

    if(existingUrl){ return res.json({message : "Url alreaddy exists"})}
    
    const shortID = nanoid(4);
     await URL.create({
        shortId: shortID,
        originalUrl
        
    })

    res.json ({ message : `shortly/${shortID}`});


})

shortRouter.get("/get/:id" , async (req,res) =>{
   const { id } = req.params;
   

  const link = await URL.findOne({shortId : id})

  if(!link) { return res.send("no url ")}

  res.redirect(link.originalUrl);
})



export default shortRouter;