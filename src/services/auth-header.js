// checks for local storage for user item
// If user logged in with access token then returns HTTP authorization header

export default function authHeader(){
    const user = JSON.parse(localStorage.getItem('user'));

    if( user && user.accessToken){
        return {
            'Authorization': 'Bearer ' + user.accessToken,
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : '*'
            // 'x-access-token': user.accessToken
        }
    } else{
        return {};
    }
}