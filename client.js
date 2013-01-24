Meteor.Router.add({
    '/shopify/authenticate' : function() {
        var shopifyParams = parseQueryString(this.querystring);

        if(shopifyParams['error']) {
            Meteor.Router.to('/connector');
        }
        else {
            var code = shopifyParams['code'];
            var shopName = shopifyParams['shop'];

            Meteor.call('shopifyAuth', code, shopName);
            Meteor.Router.to('/YOURSUCCESSPAGE');
        }
    }
});

Template.connector.events({
    'click #shopifyInstall': function() {
        var $shop = $('#shop').val();
        var apiKey = '51d8db8ddaec0dbdbfa9ffc551be932c';
        var url = 'https://' + $shop + '.myshopify.com/admin/oauth/authorize?' +
            'client_id=' + apiKey +
            '&scope=read_orders,read_customers,read_products' +
            '&redirect_uri=http://localhost:3000/shopify/authenticate';
        Meteor.Router.to(url);
    },

    'click #shopifyDisconnect': function() {
        Meteor.users.update({ _id: Meteor.userId() }, {$unset: { shopify: '' }});
    },

    'click #fetchCustomers': function() {
        Meteor.call('shopifyCustomersFetch', { }, function(error, result) {
            if(error) {
                alert('Error Code: ' + error.error + '\nError Reason: ' + error.reason);
                return;
            }

        // Customer List
        console.log(result);

        });
    }
});

var parseQueryString = function(queryString) {
    var params = {}, queries, temp, i, l;
    // Split into key/value pairs
    queries = queryString.split("&");

    // Convert the array of strings into an object
    for ( i = 0, l = queries.length; i < l; i++ ) {
        temp = queries[i].split('=');
        params[temp[0]] = temp[1];
    }

    return params;
};
