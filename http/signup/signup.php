<?php
/*
Copyright (C) 2019  Justus Croskery
To contact me, email me at justus@olmmcc.tk.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see https://www.gnu.org/licenses/.
*/
require_once '/srv/http/api/account/validationFunctions.php';
require_once '/srv/http/api/database/accessTable.php';
require_once '/srv/http/api/session/sessionStart.php';
require_once '/srv/http/api/notification/displayNotification.php';
$email = strtolower($_POST['email']);
$username = $_POST['username'];
$password1 = $_POST['password1'];
$password2 = $_POST['password2'];

if(!checkPasswords($password1, $password2, '/signup/')) {return;}
if (!checkEmail($email, '/signup/')) {return;}
if (!checkUsername($username, '/signup/')) {return;}

createRow('users', ['email', 'username', 'password', 'verified', 'admin', 'subscription_policy', 'invalid_email'], [$email, $username, password_hash($password1, PASSWORD_DEFAULT), 0, 0, 1, 0]);
session_unset();
$_SESSION['notification'] = "Your account was sucessfully created! Please login to your new account.";
echo json_encode(['url' => '/login/']);
