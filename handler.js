'use strict';
function getBody(message, event){
    var body = message + " <hr>"+
    "<a href='home'>Home</a> "+
    "<a href='login'>Login</a> "+
    "<a href='secure'>Secure</a> "+
    "<a href='testRedirect'>testRedirect</a> "+
    "<hr>Lambda called with event values: <pre>" +JSON.stringify(event, null, 2) + "</pre>";
    return body;
}

module.exports.home = (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    body: getBody("<h1>Home Page</h1>", event),
  };
  callback(null, response);
};


module.exports.secure = (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    body: getBody("<h1>Home Page</h1>", event),
  };
  callback(null, response);
};
module.exports.loginGet = (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    body: getBody("<h1>loginGet Page</h1>" +
      "<form method='post'>"+
      "<input type='text' name='username'>"+
      "<input type='password' name='password'>"+
      "<input type='submit'>"+
      "</form>", event),
  };
  callback(null, response);
};
module.exports.loginPost = (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    body: getBody("<h1>LoginPost Page</h1>", event),
  };

  // const response = {
  //   statusCode: 302,
  //   headers: {
  //     "Location": "secure"
  //   },
  //   body: ""

  // };
  callback(null, response);
};

module.exports.testRedirect = (event, context, callback) => {
  const response = {
    statusCode: 302,
    headers: {
      "Location": "https://www.google.co.uk"
    },
    body: ""
  };

  callback(null, response);
};