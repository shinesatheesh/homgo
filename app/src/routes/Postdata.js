
import axios from "axios"
const Postdata = async (link, data)=>{
    try{
        const response = await axios.post(link,data)
        if(response){
          return response.data
        }
      }catch(error){
        return "error";
      }
    }


export default Postdata;