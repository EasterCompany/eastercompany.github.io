/*
 *  static/js/main.js
 *
 *  Handles core site functionality
 *
 */

/* Chart Logic to be used in the future...
 *
 * Will track the value of Easter Company shares
 * and individual eCoin value.
 *
 */

/*
const easterCompanyValueData = fetch('/api/easter-company-value')
  .then(response => response.json());
const eCoinValueData = fetch('/api/e-coin-value')
  .then(response => response.json());
easterCompanyValueData = {
  dates: [1, 2, 3],
  values: [1, 2, 3],
};
eCoinValueData = {
  dates: [1, 2, 3],
  values: [1, 2, 3],
};
Promise.all([easterCompanyValueData, eCoinValueData])
  .then(([easterCompanyValue, eCoinValue]) => {
    // Create the charts using Chart.js
    new Chart(document.getElementById('easterCompanyValueChart'), {
      type: 'line',
      data: {
        labels: easterCompanyValue.dates, // X-axis labels (dates)
        datasets: [{
          label: 'Easter Company Value',
          data: easterCompanyValue.values, // Y-axis values
          // Add styling options here (e.g., color, line width)
        }]
      },
      // Add chart options here (e.g., title, axes, tooltips)
    });
    new Chart(document.getElementById('eCoinValueChart'), {
      type: 'line',
      data: {
        labels: eCoinValue.dates, // X-axis labels (dates)
        datasets: [{
          label: 'eCoin Value',
          data: eCoinValue.values, // Y-axis values
          // Add styling options here (e.g., color, line width)
        }]
      },
      // Add chart options here (e.g., title, axes, tooltips)
    });
  });
*/
