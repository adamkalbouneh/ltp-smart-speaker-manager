import React from "react";

const handleTestButtonClick = (event) => {
  event.preventDefault(); // Prevent the form from submitting / window refreshing

  fetch("/executeQuery")
    .then(response => response.json())
    .then(data => {
      document.getElementById("queryResult").textContent = data.result;
    })
    .catch(error => console.error(error));
};


const TestDatabasePage = () => {

  return (
    <body>
      <h1>Test Database Page</h1>
      <form>
        <button className="blue-button" onClick={handleTestButtonClick}>
          Test
        </button>
      </form>
      <h1 id="queryResult"></h1>
    </body>
  );
};

export default TestDatabasePage;
