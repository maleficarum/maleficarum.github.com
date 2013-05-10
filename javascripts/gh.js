jQuery.githubUser = function(username, callback) {
  jQuery.getJSON("https://api.github.com/users/" + username + "/repos?callback=?", callback);
}

jQuery.fn.loadRepositories = function(username) {
  this.html("<span>Querying GitHub for repositories...</span>");

  var target = this; 
  $.githubUser(username, function(response) {
    var repos = response.data;
    sortByNumberOfWatchers(repos);

    var list = $('<table/>');
    target.empty().append(list);
    $(repos).each(function() {
      if (!this.fork) {
        list.append('<tr><td><a href="'+ this.html_url +'">' + this.name + '</td><td>' + this.description + '</td></tr>');
      }
    });
  });

  function sortByNumberOfWatchers(repos) {
    repos.sort(function(a,b) {
      return b.watchers - a.watchers;
    });
  }
};
