jQuery(function($) {
$('#y').rss(
'https://news.ycombinator.com/rss',{
limit: 10,
entryTemplate: '<li><a href="{url}">- {title}</a></li>'
})
})
