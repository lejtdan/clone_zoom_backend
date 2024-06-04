-- CreateTable
CREATE TABLE `RoomZoom` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `code` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RoomZoomActions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `time` VARCHAR(191) NOT NULL,
    `day` VARCHAR(191) NOT NULL,
    `hour` VARCHAR(191) NOT NULL,
    `roomZoomId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `RoomZoomActions` ADD CONSTRAINT `RoomZoomActions_roomZoomId_fkey` FOREIGN KEY (`roomZoomId`) REFERENCES `RoomZoom`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
