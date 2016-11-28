<!DOCTYPE html>
<html lang="en">
<!-- PS 75 91 -->
<?php include 'head.php'; ?>

<body>
    <nav>
        <div class="wrapper">
            <img src="img/menu.svg" alt="">
            <h1><a href="index.php">Adam Nawrocki</a></h1>
            <ul>
                <li><a href="index.php">Adam Nawrocki</a></li>
                <li><a href="index.php">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
            </ul>
        </div>
    </nav>
    <header>
        <div class="wrapper">
            <h2>Front End Developer</h2>
            <a href="portfolio.php" class="btn">View Portfolio</a>
        </div>
    </header>
    <section class="intro">
        <div class="wrapper">
            <div class="author-intro">
                <div class="intro-text">
                    <h2>About Me</h2>
                    <p>I like teaching and constantly improving. In my spare time I read and play tennis.</p>
                </div>
                <div class="intro-image">
                    <img src="img/mitten.png" alt="michigan">
                </div>
            </div>
        </div>
    </section>
    <section class="projects">
        <h2>Portfolio</h2>
        <div class="wrapper">
            <div class="project-row">
                <div class="project">
                    <a href="https://bcuz.github.io/weather-api/"><img src="img/api.png" alt=""></a>
                    <p>Using data from Weather Underground's API to display info for the selected city</p>
                    <a href="https://github.com/bcuz/weather-api">See Code</a>
                </div>
                <div class="project">
                    <a href="click-for-feature-testimonials"><img src="img/extension-b.png" class="extension" alt=""></a>
                    <p>I help maintain/develop a Chrome extension that Codecademy Advisors use to speed up workflow</p>
                    <a href="https://bitbucket.org/walom8868/codecademy-advisortoolbox/">See Code</a>
                </div>
            </div>
            <div class="btn-row">
                <a href="portfolio.php" class="btn">View Full Portfolio</a>
            </div>
        </div>            
    </section>
    <section class="goal">
        <div class="wrapper">
            <div class="author-goal">
                <div class="goal-image">
                    <img src="img/puzzle.jpg" alt="">
                </div>
                <div class="goal-text">
                    <h2>Objective</h2>
                    <p>My goal is to improve a product that is moving the world forward at a place that puts work above status.</p>
                </div>
            </div>
        </div>
    </section>
    <?php include 'footer.php'; ?>    
</body>

</html>