<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    
    <title id="document-title">Flowmodoro</title>
</head>
<body>
    <header class = "header">
        <h2 class = "title">Flowmodoro</h2>
        <button id="sign-in-btn" class="btn px-3">Sign in</button>
    </header>

   <div class="container ">
        <div id="timer">00:00:00</div>
        <button id="button" class="btn px-4 mt-2">Start</button>
        <div class="progress ">
            <div class="progress-line-bg" id="progress-line-bg">
                <div class="progress-line" id = "progress-line"></div>
            </div>
        </div>
   </div>


    <div class="container d-flex justify-content-center align-items-center table py-2 ">
        <div id="work-time" class="col-lg-4">
            <h5>Work</h5>
        </div>
        <div id="rest-time" class="col-lg-4">
            <h5>Rest</h5>
        </div>
        <div id="session-time" class="col-lg-4">
            <h5>Session</h5>
        </div>
    </div>


    <!-- Popup -->
   <div id="popup-bg">
        <div class="popup">
            <form action="includes/sign-in.php" method = "post" class="auth-form" style="display: flex">
                <h2 class="auth-title">Flowmodoro</h2>
                <label>Log in:</label>
                <input type="text" placeholder="Add your login" class="auth-input">
                <label>Password:</label>
                <input type="password" placeholder="Must contain at least 8 character" class="auth-input">
                <button type="submit" class="auth-btn px-3">Sign in</button>
                <p class="auth-paragraph">
                    Don't have account? - <a href="#" class="auth-link" id="sign-up">Register now!</a>
                </p>
                <p class="auth-paragraph">or</p>
            </form>
            <form action="includes/sign-up.php" method = "post" class="auth-form" style = "display: none">
                <h2 class="auth-title">Flowmodoro</h2>
                <label>Log in:</label>
                <input type="text" name="login" placeholder="Enter login" class="auth-input">
                <label>e-mail:</label>
                <input type="email" name="email" placeholder="Enter email" class="auth-input">
                <label>Password:</label>
                <input type="password" name="password" placeholder="Must contain at least 8 character" class="auth-input">
                <label>Password:</label>
                <input type="password" name="password_confirm" placeholder="Confirm Password" class="auth-input">
                <button type="submit" class="auth-btn px-3">Sign up</button>
                <p class="auth-paragraph">
                    Already have account? - <a href="#" class="auth-link" id="sign-in">Sign in!</a>
                </p>
                <p class="auth-paragraph">or</p>
            </form>
        </div>
   </div>
   <!-- end of popup -->
   
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>
    <script src="main.js"></script>
</body>
</html>