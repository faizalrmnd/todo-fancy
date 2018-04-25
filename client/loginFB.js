
function statusChangeCallback(response) {
  if (response.status === 'connected') {
    if (window.location.href !== 'https://56b8e2f9.ngrok.io/todolist.html') {
      window.location.href="todolist.html"
    }
    testAPI();
  } else {
    if (window.location.href !== 'https://56b8e2f9.ngrok.io/index.html') {
      window.location.href="index.html"
    }

  }
}

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

window.fbAsyncInit = function() {
  FB.init({
    appId      : '439462766482467',
    cookie     : true,
    xfbml      : true,
    version    : 'v2.8'
  });

  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });

};

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function testAPI() {
  FB.api('/me', {fields: ['name','email']}, function(response) {
    localStorage.setItem('name', response.name)
    localStorage.setItem('idFB', response.id)
    let obj ={
      email: response.email,
      idFB: response.id,
      name: response.name
    }
    axios.post('http://localhost:3000/login', {
      obj
    },{})
    .then((res)=>{
      localStorage.setItem('token', res.data.token);
    })
    .catch((err)=>{
      console.log('ini error login------->',err);
    });
  });
}
