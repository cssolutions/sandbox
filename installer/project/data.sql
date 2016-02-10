-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Gép: localhost
-- Létrehozás ideje: 2016. Feb 10. 11:46
-- Kiszolgáló verziója: 10.1.9-MariaDB
-- PHP verzió: 5.6.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `sandbox`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `webref_rss_details`
--

CREATE TABLE `webref_rss_details` (
  `id` int(11) NOT NULL,
  `title` text NOT NULL,
  `description` mediumtext NOT NULL,
  `link` text,
  `language` text,
  `image_title` text,
  `image_url` text,
  `image_link` text,
  `image_width` text,
  `image_height` text
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- A tábla adatainak kiíratása `webref_rss_details`
--

INSERT INTO `webref_rss_details` (`id`, `title`, `description`, `link`, `language`, `image_title`, `image_url`, `image_link`, `image_width`, `image_height`) VALUES
(1, 'Első rss-em!', 'Az első rss-em létrehozva pure php-val.', 'sandbox.local/rss/index.php', 'magyar', NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `webref_rss_items`
--

CREATE TABLE `webref_rss_items` (
  `id` int(11) NOT NULL,
  `title` text NOT NULL,
  `description` mediumtext NOT NULL,
  `link` text
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- A tábla adatainak kiíratása `webref_rss_items`
--

INSERT INTO `webref_rss_items` (`id`, `title`, `description`, `link`) VALUES
(1, 'Első bejegyzés', 'Első bejegyzéshez tartozó lerás...', 'http://google.hu'),
(2, 'Második bejegyzés', 'Második bejegyzéshez tartozó lerás...', 'http://index.hu');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `webref_rss_details`
--
ALTER TABLE `webref_rss_details`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `webref_rss_items`
--
ALTER TABLE `webref_rss_items`
  ADD PRIMARY KEY (`id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `webref_rss_details`
--
ALTER TABLE `webref_rss_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT a táblához `webref_rss_items`
--
ALTER TABLE `webref_rss_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
