/*Task 1: API automation
Select any publicly available API (ex: OpenWeatherMap API or GitHub API), identify and automate three critical scenarios. Provide documentation for each of the automated scenario.
 */

describe('task1', () => {
  /*Documentation
•	API Endpoint: /data/2.5/weather?q={city}&appid={API key}
•	Request Method: GET
•	Expected Response:
o	Status Code: 200
o	Body should contain main.temp, main.humidity, and weather[0].description.
 */
  it('Verify Current Weather Data for a City', () => {
    const apiKey ='xyz';
    const city = Banglore;
    
    cy.request({
      method: 'GET',
      url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('main');
      expect(response.body.main).to.have.property('temp');
      expect(response.body.main).to.have.property('humidity');
      expect(response.body.weather[0]).to.have.property('description');
    });


  })
  
/*------------------------------------------------------------------- */
  /*Documentation
•	API Endpoint: /data/2.5/forecast?q={city}&appid={API key}
•	Request Method: GET
•	Expected Response:
o	Status Code: 200
o	Body should contain list array with elements containing main.temp and weather[0].description.
 */

  it ('should return 5-day weather forecast for Banglore’, () => {
    const apiKey = 'xyz';
    const city = ‘Banglore’; 
    cy.request({
      method: 'GET',
      url: `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('list');
      expect(response.body.list).to.be.an('array').that.is.not.empty;
      response.body.list.forEach(forecast => {
        expect(forecast).to.have.property('main');
        expect(forecast.main).to.have.property('temp');
        expect(forecast.weather[0]).to.have.property('description');
      });
    });
/*------------------------------------------------------------- */
/*Documentation
•	API Endpoint: /data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
•	Request Method: GET
•	Expected Response:
o	Status Code: 200
o	Body should contain main.temp, main.humidity, and weather[0].description.
 */
    it('Verify Weather Data by Coordinates', () => {
      const apiKey = 'xyz';
      const lat = 12.9716, 
      const lon = 77.5946;
      cy.request({
        method: 'GET',
        url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('main');
        expect(response.body.main).to.have.property('temp');
        expect(response.body.main).to.have.property('humidity');
        expect(response.body.weather[0]).to.have.property('description');
      });
    });
  

  

})