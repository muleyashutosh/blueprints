
// Set API base URL
const apiURL = "https://slack.com/api/";

// Set headers 
// Get API token with → Blueprint.userAuthentification.accessToken
const headers = {
  "Authorization": "Bearer " + Blueprint.userAuthentification.accessToken,
  "Content-Type": "application/json;charset=UTF-8",
};



Blueprint.onExecution = async function () {

  // Set request body
  var requestBody = {
    presence: "away"
  }


  // Call set Satus Endpoint
  const response = await UrlFetch(apiURL + "users.setPresence", {
    method: "post",
    headers: headers,
    body: JSON.stringify(requestBody),
  });

  // Use print() for debugging 
  print(response)

  const json = JSON.parse(response)

  // Create result
  Blueprint.newResult("success", "Presence Set to Away")
}

