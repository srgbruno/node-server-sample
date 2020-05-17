-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 17, 2020 at 02:58 AM
-- Server version: 10.3.16-MariaDB
-- PHP Version: 7.3.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Feed`
--
CREATE DATABASE IF NOT EXISTS `Feed` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `Feed`;

-- --------------------------------------------------------

--
-- Table structure for table `post`
--

CREATE TABLE `post` (
  `id` int(11) PRIMARY KEY AUTO_INCREMENT,
  `usuario_id` int(11) NOT NULL,
  `texto` varchar(255) NOT NULL,
  `data` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `post`
--

INSERT INTO `post` (`usuario_id`, `texto`, `data`) VALUES
(1, 'This is a post!!!', '2019-09-11 04:13:38'),
(1, 'This is another post!!!', '2019-09-11 04:14:02'),
(2, 'This is working, bro!!!!!!', '2019-09-11 04:14:51'),
(3, 'This is working, bro, seriously!!!!!!', '2019-09-11 04:15:16');

-- --------------------------------------------------------

--
-- Table structure for table `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) PRIMARY KEY AUTO_INCREMENT,
  `nome` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `ativo` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `usuario`
--

INSERT INTO `usuario` (`nome`, `email`, `senha`, `ativo`) VALUES
('HHHHH JJ LLLLyyyy', 'hhhuuuaavv@gmail.com', 'abcdefgh', 1),
('ZZZZaaa LLLvv BBBB', 'lllluvv@gmail.com', '123456', 1),
('Fulano da Silva', 'zzzuyyyy@gmail.com', '123456', 0);

--
-- Indexes for dumped tables
--

--
-- Constraints for dumped tables
--

--
-- Constraints for table `post`
--
ALTER TABLE `post`
  ADD CONSTRAINT `post_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
