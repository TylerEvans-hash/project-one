var loadArtistCard = function () {
    // Makes Row for Artist Card & Name
    var artistCardRow = $("<div>").attr("id", "artist-card").addClass("row");

    // Adds Row for Name
    var nameRow = $("<div>").addClass("row");
    var nameCol = $("<div>").addClass("col");
    var nameH = $("<h3>").attr("id", "artist-name").addClass("card-title").text("Place Holder Name");
    artistCardRow.append(nameRow);
    nameRow.append(nameCol);
    nameCol.append(nameH);

    // Adds Artist Card
    var cardRow = $("<div>").addClass("row");
    var cardCol = $("<div>").addClass("col s4");
    var cardDiv = $("<div>").addClass("card");
    artistCardRow.append(cardRow);
    cardRow.append(cardCol);
    cardCol.append(cardDiv);

    // Adds Artist Description to Artist Card
    var artistDescription = $("<div>").attr("id", "artist-description").addClass("card-content");
    var descriptionP = $("<p>").text("This is a place holder for the Artist Description. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique odit quam, dolorem dignissimos at commodi dolores minus, voluptate corporis voluptas in exercitationem vel facilis est quas, fuga nihil adipisci optio.");
    cardDiv.append(artistDescription);
    artistDescription.append(descriptionP);

    // Adds Card Tabs
    var cardTabsDiv = $("<div>").addClass("card-tabs");
    var cardTabsUl = $("<ul>").addClass("tabs tabs-fixed-width");
    cardDiv.append(cardTabsDiv);
    cardTabsDiv.append(cardTabsUl);

    var liOrigin = $("<li>").addClass("tab");
    var articleOrigin = $("<a>").attr("href", "#origin").text("Test Info");
    liOrigin.append(articleOrigin);

    var liArtistInfo = $("<li>").addClass("tab");
    var articleArtistInfo = $("<a>").attr("href", "#info").text("Test Info");
    liArtistInfo.append(articleArtistInfo);

    var liArtistBirthplace = $("<li>").addClass("tab");
    var articleBirthplace = $("<a>").attr("href", "#birhtplace").text("Test Info");
    liArtistBirthplace.append(articleBirthplace);

    // Append Card Tabs <li> to <ul> element
    cardTabsUl.append(liOrigin, liArtistInfo, liArtistBirthplace);

    // Adds Card Tab text/data
    var tabContentDiv = $("<div>").addClass("card-content grey lighten-4");
    var originDiv = $("<div>").attr("id", "origin").attr("style", "display:block").addClass("active").text("Place Holder Text");
    var infoDiv = $("<div>").attr("id", "info").attr("style", "display:none");
    var birthplaceDiv = $("<div>").attr("id", "birthplace").attr("style", "display:none");
    tabContentDiv.append(originDiv, infoDiv, birthplaceDiv);
    cardDiv.append(tabContentDiv);

    // Appends images to Artist Card Row
    var imageDiv = $("<div>").attr("id", "images").addClass("col s6");
    cardRow.append(imageDiv);

    // Appends Artist Card to page
    $("#card-holder").append(artistCardRow);
};

loadArtistCard();