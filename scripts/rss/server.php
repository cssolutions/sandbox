<?php
require __DIR__ . '/vendor/autoload.php';
$feed = new \Suin\RSSWriter\Feed();

$channel = new \Suin\RSSWriter\Channel();
$channel
    ->title("Channel Title")
    ->description("Channel Description")
    ->url('http://blog.example.com')
    ->appendTo($feed);

// RSS item
$item = new \Suin\RSSWriter\Item();
$item
    ->title("Blog Entry Title")
    ->description("<div>Blog body</div>")
    ->url('http://blog.example.com/2012/08/21/blog-entry/')
    ->appendTo($channel);

// Podcast item
$item = new \Suin\RSSWriter\Item();
$item
    ->title("Some Podcast Entry")
    ->description("<div>Podcast body</div>")
    ->url('http://podcast.example.com/2012/08/21/podcast-entry/')
    ->enclosure('http://link-to-audio-file.com/2013/08/21/podcast.mp3', 4889, 'audio/mpeg')
    ->appendTo($channel);

//write it in xml format
echo $feed;

