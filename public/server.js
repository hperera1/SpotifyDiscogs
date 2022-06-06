(function() {
    var userProfileSource = document.getElementById('user-profile-template').innerHTML,
        userProfileTemplate = Handlebars.compile(userProfileSource),
        userProfilePlaceholder = document.getElementById('user-profile');

    console.log(userProfileSource);
    console.log(userProfileTemplate);
    console.log(userProfilePlaceholder);

    // var userAlbumsSource = document.getElementById('user-albums-template').innerHTML,
    //     userAlbumsTemplate = Handlebars.compile(userAlbumsSource);

    var oauthSource = document.getElementById('oauth-template').innerHTML,
        oauthTemplate = Handlebars.compile(oauthSource),
        oauthPlaceholder = document.getElementById('oauth');

    // this gets values from the url, you can see them at the top!
    let params = getHashParams();
    let access_token = params.access_token,
        refresh_token = params.refresh_token,
        error = params.error;

    // gets parameters from the hash of the URL return object
    function getHashParams() {
      var hashParams = {};
      var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
      
        while(e = r.exec(q)) {
            hashParams[e[1]] = decodeURIComponent(e[2]);
        }
      
      return hashParams;
    }

    // get top 5 artists
    function getTracks() {
        $.ajax({
            url: `https://api.spotify.com/v1/me/top/tracks?limit=12&time_range=medium_term`,
            headers: {
                Authorization: 'Bearer ' + access_token
            },
            success: function(response) {
                let data = {
                    tracks: response.items,
                    images: [],
                    json: true,
                };

                for(var i = 0; i < data.tracks.length; i++) {
                    console.log(data.tracks[i].name + " | " + data.tracks[i].album.name );
                    data.images[i] = data.tracks[i].album.images[0].url;
                }

                console.log(data);

                userProfilePlaceholder.innerHTML = userProfileTemplate({
                    tracks: data.tracks,
                    images: data.images,
                });
            },
        });

        var discogsUrl = encodeURI("https://api.discogs.com/database/search?q=Lo Mato Willie Colon");
        $.ajax({
            url: discogsUrl,
            headers: {
                Authorization: "Discogs key=fNDcbBbzwRjRzfWAYTaj, secret=QdnPenRENAspAnWWBRzKjSRbMfGlazJu"
            },
            success: function(response) {
                console.log(response);
            },
        });
        
        var discogsUrl = encodeURI("https://api.discogs.com/database/search?q=Lo Mato Willie Colon");
        $.ajax({
            url: discogsUrl,
            headers: {
                Authorization: "Discogs key=fNDcbBbzwRjRzfWAYTaj, secret=QdnPenRENAspAnWWBRzKjSRbMfGlazJu"
            },
            success: function(response) {
                console.log(response);
            },
        });
    }

    if (error) {
      alert('There was an error during the authentication');
    } 
    else {
        if (access_token) {
            // render oauth info
            oauthPlaceholder.innerHTML = oauthTemplate({
                access_token: access_token,
                refresh_token: refresh_token
            });

            // spotify profile info call
            $.ajax({
            url: 'https://api.spotify.com/v1/me',
            headers: {
                Authorization: 'Bearer ' + access_token
            },
            success: function(response) {
                console.log(response);
                userProfilePlaceholder.innerHTML = userProfileTemplate(response);
                console.log(userProfilePlaceholder);
                $('#login').hide();
                $('#loggedin').show();
            }
            });
        } 
        else {
            $('#login').show();
            $('#loggedin').hide();
        }

        document.getElementById('obtain-new-token').addEventListener('click', function() {
            $.ajax({
                url: '/refresh_token',
                data: {
                    'refresh_token': refresh_token
                }
            }).done(function(data) {
            access_token = data.access_token;
            oauthPlaceholder.innerHTML = oauthTemplate({
                access_token: access_token,
                refresh_token: refresh_token
            });
            });}, false);
        
        document.getElementById('get_tracks').addEventListener('click', function() {
            getTracks();
        });
    }
})();