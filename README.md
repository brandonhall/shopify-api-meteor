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

### License 

(The MIT License)

Copyright (c) 2013 Brandon Hall &lt;brandonhall@outlook.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
