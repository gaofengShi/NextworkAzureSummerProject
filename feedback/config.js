const config = {};

config.host = process.env.HOST || "https://feedback-db01.documents.azure.com:443/";
config.authKey =
  process.env.AUTH_KEY || "oMGyv31vC1aINRnSGwitH6ZGmmWqSQR8qBpZ9jxXIghgVqBv3P3kpBBXCYLzjiNEQjQ02Awv033LACDbGe7PKg==";
config.databaseId = "sumproDB";
config.containerId = "Collection01";

if (config.host.includes("https://localhost:")) {
  console.log("Local environment detected");
  console.log("WARNING: Disabled checking of self-signed certs. Do not have this code in production.");
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  console.log(`Go to http://localhost:${process.env.PORT || '3000'} to try the sample.`);
}

module.exports = config;