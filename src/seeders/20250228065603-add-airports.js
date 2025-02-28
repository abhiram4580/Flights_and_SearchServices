'use strict';

const { now } = require('sequelize/lib/utils');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Airports',[
         {
           name:'Kempagowda International Airport',
           cityId:4,
           createdAt:new Date(),
           updatedAt:new Date()

         },
         {
          name:'Rajiv Gandhi International Airport',
          cityId:5,
          createdAt:new Date(),
          updatedAt:new Date()
         },
         {
          name:'Mangaluru International Airport',
          cityId:4,
          createdAt:new Date(),
          updatedAt:new Date()
         }
     ],{});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
