(function () {
    function getHashParams() {
        var hashParams = {};
        var e,
          r = /([^&;=]+)=?([^&;]*)/g,
          q = window.location.hash.substring(1);
        while ((e = r.exec(q))) {
          hashParams[e[1]] = decodeURIComponent(e[2]);
        }
        return hashParams;
    }

    // function getArtists() {
    //     $.ajax({
    //         url: `https://api.spotify.com/v1/me/top/artists?limit=5&time_range=short_term`,
    //         header: {
    //             Authorization: "Bearer " + access_token,
    //         },
    //         success: function(response) {
    //             console.log(response.items);
    //         },
    //         error: function(response) {
    //             console.log(access_token);
    //             console.log("call failed");
    //         },
    //     });
    // }

    let params = getHashParams();
    let access_token = params.access_token,
        dev_token = params.dev_token,
        client = params.client,
        error = params.error;

    if(error) {
        alert("there was an error during authentication");
    }
    else {
        if(client === "spotify" && access_token) {
            console.log("verified");
        }
    }

    // document.getElementById("get_artists").addEventListener(
    //     "click",
    //     function() {
    //         console.log("button clicked");
    //         getArtists();
    //     },
    //     false
    // );
})();