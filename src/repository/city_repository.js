const {City}=require('../models/index');
const {Op}=require('sequelize');
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
        // the below approach also works but will not return the updated object
        //     const city=await City.update(data,{
        //         where:{
        //            id:cityId,
        // 
        //                   },
        // 
        // 
        //    });
        // for getting 
        const city=await City.findByPk(cityId);
        city.name=data.name;
        await city.save();
        return city;
        }
        catch(error){
             console.log("Something is wrong in the repository layer");
             throw {error};
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
    async getAllCities(filter){
        try { 
            if(filter.name){
                const cities = await City.findAll({ 
                    where: {
                        name: {
                            [Op.startsWith]: filter.name
                        }
                    }
                });
                return cities;
            }
            const cities = await City.findAll();
            return cities;
        }
        catch(error){
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }
    
}
module.exports=CityRepository;
