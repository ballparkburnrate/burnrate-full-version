module.exports = function (sequelize, DataTypes) {
    var Cash = sequelize.define("Cash", {        
        date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        amount: {
            type: DataTypes.DOUBLE,
            allowNull: true
        }
    });

    Cash.associate = function(models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        Cash.belongsTo(models.User, {
         foreignKey:{
             allowNull: false
         }
        });
      };

    return Cash;
};