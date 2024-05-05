const Logout = () => {
    document.cookie = "userLogged=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.replace("weather-report")
}

export default Logout;
