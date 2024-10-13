@echo off
echo Setting up Quiz App Backend...

REM Create project folders
mkdir controllers models routes

REM Create files
type nul > server.js
type nul > .env
type nul > controllers\authController.js
type nul > controllers\quizController.js
type nul > controllers\openaiController.js
type nul > models\User.js
type nul > models\Quiz.js
type nul > routes\authRoutes.js
type nul > routes\quizRoutes.js

echo Folder structure created successfully!

REM Display the structure (optional)
tree /F

echo Done! Now you can open the project in your code editor.
pause