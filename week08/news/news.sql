-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2016-03-15 12:56:11
-- 服务器版本： 10.1.9-MariaDB
-- PHP Version: 5.6.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jikedb`
--

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE `news` (
  `newsId` int(11) NOT NULL COMMENT '自动增长',
  `newsTitle` varchar(100) NOT NULL,
  `newsImg` varchar(100) NOT NULL,
  `newsContent` varchar(100) NOT NULL,
  `addDate` date NOT NULL,
  `newsTag` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`newsId`, `newsTitle`, `newsImg`, `newsContent`, `addDate`, `newsTag`) VALUES
(21, '小米从Intel购买数百件专利或是要再战美国市场', '3.JPG', '据《中国知识产权报》报道指小米今年2月从Intel公司购买了332件美国专利，这应是其在去年底手机获得美国FCC认证后迅速被专利流氓Blue Spike公司起诉专利侵权，而美国虚拟运营商US Mobi', '2016-03-11', '朋友圈'),
(27, '住建部：一线城市调控房价涨太快收到一定效果', 'fangjia', '十二届全国人大四次会议新闻中心定于3月15日（星期二）10时在梅地亚中心多功能厅举行记者会，邀请住房和城乡建设部部长陈政高、副部长陆克华、副部长倪虹就“棚户区改造和房地产工作”的相关问题回答中外记者的', '2016-03-15', '住房'),
(28, '住建部：一线城市调控房价涨太快收到一定效果', 'fangjia', '十二届全国人大四次会议新闻中心定于3月15日（星期二）10时在梅地亚中心多功能厅举行记者会，邀请住房和城乡建设部部长陈政高、副部长陆克华、副部长倪虹就“棚户区改造和房地产工作”的相关问题回答中外记者的', '2016-03-15', '住房');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`newsId`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `news`
--
ALTER TABLE `news`
  MODIFY `newsId` int(11) NOT NULL AUTO_INCREMENT COMMENT '自动增长', AUTO_INCREMENT=29;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
