
import axios from 'axios';
export class Api{
    getApi(genre:string,page:number){
        
        axios.get(`https://api.rawg.io/api/games?key=faf03104a734484db6f8cdc297d6cb53&genre=${genre}&page=${page}`)
        .then(r=>{
        const data =  r.data
        return data
        })
        
       
      }
    searchApi(search:string){
        let data;
        axios.get(`https://api.rawg.io/api/games?key=faf03104a734484db6f8cdc297d6cb53&name=${search}`)
        .then(r=>{
            data = r.data
        })
        return data

    }
}