/*
  Warnings:

  - You are about to drop the column `course_3_id` on the `course_content` table. All the data in the column will be lost.
  - You are about to drop the column `course_2_id` on the `enrollment` table. All the data in the column will be lost.
  - You are about to drop the column `course_5_id` on the `review` table. All the data in the column will be lost.
  - You are about to drop the column `course_1_id` on the `student` table. All the data in the column will be lost.
  - You are about to drop the column `course_4_id` on the `transaction` table. All the data in the column will be lost.
  - Added the required column `course_id` to the `course_content` table without a default value. This is not possible if the table is not empty.
  - Added the required column `course_id` to the `enrollment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `course_id` to the `review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `course_id` to the `transaction` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "course_content" DROP CONSTRAINT "course_content_course_3_id_fkey";

-- DropForeignKey
ALTER TABLE "enrollment" DROP CONSTRAINT "enrollment_course_2_id_fkey";

-- DropForeignKey
ALTER TABLE "review" DROP CONSTRAINT "review_course_5_id_fkey";

-- DropForeignKey
ALTER TABLE "student" DROP CONSTRAINT "student_course_1_id_fkey";

-- DropForeignKey
ALTER TABLE "transaction" DROP CONSTRAINT "transaction_course_4_id_fkey";

-- AlterTable
ALTER TABLE "course_content" DROP COLUMN "course_3_id",
ADD COLUMN     "course_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "enrollment" DROP COLUMN "course_2_id",
ADD COLUMN     "course_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "review" DROP COLUMN "course_5_id",
ADD COLUMN     "course_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "student" DROP COLUMN "course_1_id",
ADD COLUMN     "course_id" INTEGER NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE "transaction" DROP COLUMN "course_4_id",
ADD COLUMN     "course_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "student" ADD CONSTRAINT "student_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "enrollment" ADD CONSTRAINT "enrollment_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "course_content" ADD CONSTRAINT "course_content_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transaction" ADD CONSTRAINT "transaction_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "review" ADD CONSTRAINT "review_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
