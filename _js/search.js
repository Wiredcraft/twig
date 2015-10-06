$(function() {
  var hero = $('body.archive');
  if (hero.length) {
    var client = algoliasearch('TNST61VKID', '6059f34d487549cb8300ed8c6bad53ab'); // Read only key
    var index = client.initIndex('weeklywonk');
    var RESULTS = '.results';
    var PAGER = '.pager';

    // We try and figure out if there's a page
    var current = getPage();

    // Display the first page by default
    doSearch();

    function doSearch() {
      var $results = $(RESULTS);

      $results.addClass('updating');

      index.search('', {
        // facets: 'type',
        // facetFilters: [ 'type:post' ],
        hitsPerPage: 2,
        page: current - 1
      }, searchMultiCallback);
    }

    function searchMultiCallback(err, content) {
      var $results = $(RESULTS)
      $results.empty();
      $results.removeClass('updating');

      if (err){
        console.warn('Search error', err);
        $resultCountView.text('Oops! We couldn\'t load the articles. Try and refresh the page.');
        return
      }

      $results.removeClass('loading');

      displayPager(content.nbPages)
      showResults(content.hits)
    }

    function showResults(results){
      var $results = $(RESULTS)
      if (results.length == 0){
        $results.text("<div class='empty'>No results</div>");
      }

      for (var i in results){
        var result = results[i];
        var item  = "<article class='article'>";
            item += "  <a href='"+ result.url +"'><img src='"+ result.cover +"'/></a>";
            item += "  <h2><a href='"+ result.url +"'>" + result.title +"</a></h2>";
            item += "  <span class='meta'>";
            item += "    <span class='authors'>by "+ result.authors.join(', ') +"</span>";
            item += "    <span class='time'>on <time>"+ formatDate(result.posted_at) + "</time></span>";
            // item += "    <span class='issue'>"+ formatDate(result.issue) + "</span>";
            item += "  </span>";
            item += "  <p>"+ teaser(result.text) +"(...) <a href='"+ result.url +"'>Read the full story</a>.</p>";
            item += "</article>";

        $results.append(item);
      }
    }

    function displayPager(count){
      var pager = $(PAGER)
      pager.empty();
      for (var page = 1; page <= count; page++) {
        var link  = $('<button rel="'+ page +'">' + page + '</button>');
        if (page == current) link.addClass('active');
        link.click(function () {
          current = $(this).attr('rel');
          doSearch();
        });
        pager.append(link);
      }
    }

    function formatDate(epochTimestamp){
      // Target format: August 27, 2015

      var monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
      ];

      var d = new Date(0);
      d.setUTCSeconds(epochTimestamp);

      var day = d.getDate();
      var monthIndex = d.getMonth();
      var year = d.getFullYear();

      return monthNames[monthIndex] + ' ' + day + ', ' + year
    }

    function teaser(string) {
        var length = 280;
        var teaser = string.substr(0, length);
        // Trim again if we are in the middle of a word
        teaser = teaser.substr(0, Math.min(teaser.length, teaser.lastIndexOf(' ')));
        return teaser;
    }

    function getPage() {
      var results = new RegExp('[\?&]page=([^&#]*)').exec(window.location.href);
      if (results == null){
        return 1;
      }
      else {
        return results[1] || 0;
      }
    }
  }
});
