const {City}=require('../models/index');

class CityRepository{
     
    async createCity({name}){
       
        try{
            console.log("Received city name:", name);
            const city=await City.create({
                name
            });
            return city;
        }
        catch(error){
            console.log("Something went wrong in the repository layer");
            throw {error}; 
        }

    }

    async deleteCity(cityid){
        try{
           const deleterow=await City.destroy({
                where:{
                    id:cityid
                }
            });
            return deleterow>0;
        }catch(error){
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async updateCity(cityId,data){
        try{
            const city=await City.update(data,{
                where:{
                    id:cityId
                }
            });
            return city;
        }
        catch(error){

        }
    }

    async getCity(cityid){
        try{
            const city=await City.findByPk(cityid);
            return city;
        }
        catch(error){
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }



}
module.exports=CityRepository;
