/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `coder` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "coder_code_key" ON "coder"("code");
