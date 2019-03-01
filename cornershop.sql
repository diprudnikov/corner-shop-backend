/*
Navicat MySQL Data Transfer

Source Server         : dima
Source Server Version : 80015
Source Host           : localhost:3306
Source Database       : cornershop

Target Server Type    : MYSQL
Target Server Version : 80015
File Encoding         : 65001

Date: 2019-03-01 05:25:22
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for carts
-- ----------------------------
DROP TABLE IF EXISTS `carts`;
CREATE TABLE `carts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `carts_products` (`product_id`),
  CONSTRAINT `carts_products` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of carts
-- ----------------------------
INSERT INTO `carts` VALUES ('51', '6', '2019-03-01 02:04:01', '2019-03-01 02:04:01');
INSERT INTO `carts` VALUES ('52', '7', '2019-03-01 02:04:02', '2019-03-01 02:04:02');
INSERT INTO `carts` VALUES ('53', '8', '2019-03-01 02:04:04', '2019-03-01 02:04:04');
INSERT INTO `carts` VALUES ('54', '9', '2019-03-01 02:04:04', '2019-03-01 02:04:04');

-- ----------------------------
-- Table structure for categories
-- ----------------------------
DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `tax_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `category_tax` (`tax_id`),
  CONSTRAINT `category_tax` FOREIGN KEY (`tax_id`) REFERENCES `taxes` (`id`) ON DELETE SET NULL ON UPDATE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of categories
-- ----------------------------
INSERT INTO `categories` VALUES ('1', 'Candy', null, '2019-03-01 01:41:03', '2019-03-01 01:41:03');
INSERT INTO `categories` VALUES ('2', 'Device', '1', '2019-03-01 01:41:03', '2019-03-01 01:41:03');
INSERT INTO `categories` VALUES ('3', 'Popcorn', null, '2019-03-01 01:41:03', '2019-03-01 01:41:03');
INSERT INTO `categories` VALUES ('4', 'Coffee', null, '2019-03-01 01:41:03', '2019-03-01 01:41:03');
INSERT INTO `categories` VALUES ('5', 'Wine', '1', '2019-03-01 01:41:03', '2019-03-01 01:41:03');
INSERT INTO `categories` VALUES ('6', 'Vehicle', '1', '2019-03-01 01:41:03', '2019-03-01 01:41:03');

-- ----------------------------
-- Table structure for products
-- ----------------------------
DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `isImported` tinyint(1) DEFAULT NULL,
  `category_id` int(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `product_category` (`category_id`),
  CONSTRAINT `product_category` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE SET NULL ON UPDATE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of products
-- ----------------------------
INSERT INTO `products` VALUES ('1', 'Walkman', '99.99', '0', '2', '2019-02-28 17:05:38', '2019-02-28 17:05:38');
INSERT INTO `products` VALUES ('2', 'Skittles', '16.00', '0', '1', '2019-02-28 17:08:49', '2019-02-28 17:08:49');
INSERT INTO `products` VALUES ('3', 'bag of microwave Popcorn', '0.99', '0', '3', '2019-02-28 17:08:49', '2019-02-28 17:08:49');
INSERT INTO `products` VALUES ('4', 'Vanilla-Hazelnut Coffee ', '11.00', '1', '4', '2019-02-28 17:08:49', '2019-02-28 17:08:49');
INSERT INTO `products` VALUES ('5', 'Vespa ', '15001.25', '1', '6', '2019-02-28 17:08:49', '2019-02-28 17:08:49');
INSERT INTO `products` VALUES ('6', 'Almond Snickers ', '75.99', '1', '1', '2019-03-01 00:11:10', '2019-03-01 00:11:10');
INSERT INTO `products` VALUES ('7', 'Discman ', '55.00', null, '2', '2019-03-01 00:11:27', '2019-03-01 00:11:27');
INSERT INTO `products` VALUES ('8', 'Bottle of Wine ', '10.00', '1', '5', '2019-03-01 00:11:36', '2019-03-01 00:11:36');
INSERT INTO `products` VALUES ('9', 'Fair-Trade Coffee ', '997.99', null, '4', '2019-03-01 00:11:47', '2019-03-01 00:11:47');

-- ----------------------------
-- Table structure for sequelizemeta
-- ----------------------------
DROP TABLE IF EXISTS `sequelizemeta`;
CREATE TABLE `sequelizemeta` (
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of sequelizemeta
-- ----------------------------
INSERT INTO `sequelizemeta` VALUES ('20190228120858-create-product.js');
INSERT INTO `sequelizemeta` VALUES ('20190228121142-create-cart.js');
INSERT INTO `sequelizemeta` VALUES ('20190228135113-create-tax.js');

-- ----------------------------
-- Table structure for taxes
-- ----------------------------
DROP TABLE IF EXISTS `taxes`;
CREATE TABLE `taxes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `value` decimal(10,2) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of taxes
-- ----------------------------
INSERT INTO `taxes` VALUES ('1', 'Non-exempt', '10.00', '2019-02-28 17:54:12', '2019-02-28 17:54:12');
INSERT INTO `taxes` VALUES ('2', 'Imported', '5.00', '2019-02-28 17:54:12', '2019-02-28 17:54:12');
SET FOREIGN_KEY_CHECKS=1;
