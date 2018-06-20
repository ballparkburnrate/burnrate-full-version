

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('9b22c744f2ab46c69aec1ee7062252de');

module.exports = function (app) {
    app.get("/api/new", function (req, res) {
        newsapi.v2.topHeadlines({
            q: 'economy',
            category: 'business',
            language: 'en'
        }).then(response => {

            console.log(response);

            res.json(response);            
        });
    });
};