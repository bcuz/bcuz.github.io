    <footer>
        <div class="wrapper">
            <ul>
                <li>
                    <a href="https://github.com/bcuz"><img src="img/github.png" alt=""></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/pub/adam-nawrocki/b4/b60/1b0"><img src="img/linkedin.png" alt=""></a>
                </li>
                <li>
                    <a href="mailto:adam.nawroc@gmail.com"><img src="img/email.png" alt=""></a>
                </li>
            </ul>
        </div>
    </footer>
    <script src="https://code.jquery.com/jquery-latest.min.js"></script>
    <?php 
        if (basename($_SERVER['PHP_SELF']) === "index.php") {
         echo '<script src="https://cdn.jsdelivr.net/jquery.scrollto/2.1.2/jquery.scrollTo.min.js"></script>';
    }      
    ?>
    <script src="js/app.js"></script>
    <script src="http://localhost:35729/livereload.js"></script>