import axios from "axios";

const instance=axios.create({
    
    baseURL:"http://localhost:5001/fullclone-70887/us-central1/api"
})

export default instance;