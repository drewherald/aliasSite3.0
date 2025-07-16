const Project = require("../models/projectModel");


const getProjectItems = async (req, res) => {

  try {

    const email = req.params.email

    const items = await Project.getItems(email);


    res.status(200).json({items});
  } catch (e) {
    res.status(400).json({ error: e.message });
    console.log(e.message);
  }
};

const postProjectItems = async (req, res) => {

    try{
        const {name, projStatus, email, update} = req.body;

        const items = await Project.postItems(name, projStatus, email, update);

         res.status(200).json({items});
  } catch (e) {
    res.status(400).json({ error: e.message });
    console.log(e.message);
  }
    

}




module.exports = { getProjectItems, postProjectItems};
