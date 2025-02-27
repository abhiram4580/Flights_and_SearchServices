const {City}=require('../models/index');

class CityRepository{
     
    async createCity({name}){
       
        try{
            const city=await City.create({
                name
            });
        }
        catch(error){
            console.log("Something went wrong in the repository layer");
            throw {error};
        }

    }

    async deleteCity(cityid){
        try{
            await City.destroy({
                where:{
                    id:cityid
                }
            });
            return true;
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
            const city=await City.findByPk(cityId);
            return city;
        }
        catch(error){
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }



}
