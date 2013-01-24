Meteor.methods({
    shopifyCredentials: function() {
        return {
            apiKey: 'YOUR API KEY',
            secret: 'YOUR SHARED SECRET'
        }
    },

    shopifyAuth: function(code, shopName) {
        if(!shopName || !code) {
            throw new Meteor.Error('400', 'Params missing for shopifyAuth');
        }

        this.unblock();

        var apiKey = Meteor.call('shopifyCredentials').apiKey,
            secret = Meteor.call('shopifyCredentials').secret;

        var url = 'https://' + shopName + '/admin/oauth/access_token';
        var data = { client_id: apiKey, client_secret: secret, code: code };

        var res = Meteor.http.post(url, { params: data });

        if(res.statusCode === 200) {
            Meteor.users.update({}, {$push: { shopify: { token: res.data.access_token, shop: shopName }}});
        } else {
            throw new Meteor.Error('503', 'Shopify authorization failed');
        }
    },

    shopifyUser: function() {
        return {
            shop: _.first(Meteor.user().shopify).shop,
            token: _.first(Meteor.user().shopify).token
        }
    },

    shopifyCustomersFetch: function(options) {
        var endpoint = '/admin/customers.json';
        var res = Meteor.call('shopifyFetch', endpoint, options);

        if(res.customers) {
            return res.customers;
        } else {
            return new Meteor.Error(res);
        }
    },

    shopifyCustomersCount: function(options) {
        var endpoint = '/admin/customers/count.json';
        var res = Meteor.call('shopifyFetch', endpoint, options);

        if(res.count) {
            return res.count;
        } else {
            return new Meteor.Error(res);
        }
    },

    shopifyOrdersFetch: function(options) {
        var endpoint = '/admin/orders.json';
        var res = Meteor.call('shopifyFetch', endpoint, options);

        if(res.orders) {
            return res.orders;
        } else {
            return new Meteor.Error(res);
        }
    },

    shopifyOrdersCount: function(options) {
        var endpoint = '/admin/orders/count.json';
        var res = Meteor.call('shopifyFetch', endpoint, options);

        if(res.count) {
            return res.count;
        } else {
            return new Meteor.Error(res);
        }
    },

    shopifyFetch: function(endpoint, options) {
        var shop = Meteor.call('shopifyUser').shop,
            token = Meteor.call('shopifyUser').token,
            apiUrl = 'https://' + shop + endpoint;

        if(!shop || !token || !apiUrl) {
            throw new Meteor.Error('400', 'Missing parameter for shopifyCustomers');
        }

        this.unblock();

        var res = Meteor.http.get(apiUrl,
            { headers: { "X-Shopify-Access-Token": token }, params: options });

        if(res.statusCode === 200) {
            return res.data;
        } else {
            return res.error;
        }
    }
});
