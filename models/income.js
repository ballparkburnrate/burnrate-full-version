module.exports = function (sequelize, DataTypes) {
    var Income = sequelize.define("Income", {
        isRecurring: {
            type: DataTypes.BOOLEAN,
            defaultValue: 0,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        amount: {
            type: DataTypes.DOUBLE,
            allowNull: true
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });  
    
     Income.associate = function(models) {
         // Associating Author with Posts
         // When an Author is deleted, also delete any associated Posts
         Income.belongsTo(models.User, {
          foreignKey:{
              allowNull: false
          }
         });
       };
    return Income;
};