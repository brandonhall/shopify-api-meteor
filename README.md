shopify-api-meteor
==================

Server side wrapper for implementing the Shopify Api in Meteor

### Description

This a very simple implementation for using the [Shopify API](http://api.shopify.com/) 
in Meteor. Currently, it only includes fetching of customers and orders. When I
add new functionality in my project, I will update the repo here.

Pull requests are welcome if you want to extend the API implementation
or provide test coverage.

### Usage

1. Drop this file in `/server` folder
2. Edit the `apiKey` and `secret` variables
3. See `client.js` for an implementation example

### Notes

1. Out of the box authorization. 
2. Set the return URL in your partner account to your success url in the `client.js` file
2. Supports `params` as on options object called from the client

**TODO:** Better error handling in `client.js`

**TODO:** Support more of the Shopify API

**TODO:** Add test coverage
