module.exports = function (sequelize, DataTypes) {
    var Expense = sequelize.define("Expense", {
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

    Expense.associate = function(models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        Expense.belongsTo(models.User, {
         foreignKey:{
             allowNull: false
         }
        });
      };
    return Expense;
};