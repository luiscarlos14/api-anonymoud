/*
  Warnings:

  - You are about to drop the `coder` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "coder";

-- CreateTable
CREATE TABLE "coders" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,

    CONSTRAINT "coders_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "coders_code_key" ON "coders"("code");
