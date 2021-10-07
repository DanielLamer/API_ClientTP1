/*
    Méthodes d'accès aux services Web API BookmarksManager
 */

const apiBaseURL= "https://glistening-sulfuric-production.glitch.me/api/bookmarks";

function webAPI_getBookmarks( successCallBack, errorCallBack) {
    $.ajax({
        url: apiBaseURL,
        type: 'GET',
        contentType:'text/plain',
        data:{},
        success: bookmarks => {  successCallBack(bookmarks);
                                console.log("webAPI_getBookmarks - success");},
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_getBookmarks - error");
        }
    });
}

function webAPI_sortBookmarksByName( successCallBack, errorCallBack) {
    $.ajax({
        url: apiBaseURL + "?sort=name",
        type: 'GET',
        contentType:'text/plain',
        data:{},
        success: bookmarks => {  successCallBack(bookmarks);
                                console.log("webAPI_sortBookmarksByName - success");},
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_sortBookmarksByName - error");
        }
    });
}

function webAPI_searchBookmarksByName(searchTerm, successCallBack, errorCallBack){
    $.ajax({
        url: apiBaseURL + "?name=" + searchTerm + "*",
        type: 'GET',
        contentType:'text/plain',
        data:{},
        success: bookmarks => {  successCallBack(bookmarks);
                                console.log("webAPI_searchBookmarksByName - success");},
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_searchBookmarksByName - error");
        }
    });
}

function webAPI_sortBookmarksByCategory( successCallBack, errorCallBack) {
    $.ajax({
        url: apiBaseURL + "?sort=category",
        type: 'GET',
        contentType:'text/plain',
        data:{},
        success: bookmarks => {  successCallBack(bookmarks);
                                console.log("webAPI_sortBookmarksByCategory - success");},
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_sortBookmarksByCategory - error");
        }
    });
}

function webAPI_getBookmark( id, successCallBack, errorCallBack) {
    $.ajax({
        url: apiBaseURL + "/" + id,
        type: 'GET',
        contentType:'text/plain',
        data:{},
        success: bookmark => { successCallBack(bookmark); console.log("webAPI_getBookmark - success");},
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_getBookmark - error");
        }
    });
}

function webAPI_addBookmark( bookmark, successCallBack, errorCallBack) {
    console.log('add', bookmark)
    $.ajax({
        url: apiBaseURL,
        type: 'POST',
        contentType:'application/json',
        data: JSON.stringify(bookmark),
        success: () => {successCallBack();  console.log("webAPI_addBookmarks - success");},
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_addBookmarks - error");
        }
    });
}



function webAPI_modifyBookmark( bookmark, successCallBack, errorCallBack) {
    console.log('modify', bookmark)
    $.ajax({
        url: apiBaseURL + "/" + bookmark.Id,
        type: 'PUT',
        contentType:'application/json',
        data: JSON.stringify(bookmark),
        success:() => {successCallBack();  console.log("webAPI_modifyBookmark - success");},
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_modifyBookmark - error");
        }
    });
}

function webAPI_deleteBookmark( id, successCallBack, errorCallBack) {
    $.ajax({
        url: apiBaseURL+"/" + id,
        contentType:'text/plain',
        type: 'DELETE',
        success:() => {successCallBack();  console.log("webAPI_deleteBookmark - success");},
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_deleteBookmark - error");
        }
    });
}
