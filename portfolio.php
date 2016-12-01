<!DOCTYPE html>
<html lang="en">

<?php include 'head.php'; ?>

<body>
    <nav>
        <div class="wrapper">
            <img src="img/menu.svg" alt="">
            <h1><a href="index.php">Adam Nawrocki</a></h1>
            <ul>
                <li><a href="index.php" class="name">Adam Nawrocki</a></li>
                <li><a href="index.php">Home</a></li>
            </ul>
        </div>
    </nav>
    <section class="projects">
        <h1>Portfolio</h1>
        <h2>JavaScript</h2>
        <div class="wrapper">
            <div class="project-row">
                <div class="project">
                    <!-- 620x470 on paint -->
                    <a href="https://bcuz.github.io/weather-api/"><img src="img/api.png" alt=""></a>
                    <p>Using data from Weather Underground's API </p>
                    <a href="https://github.com/bcuz/weather-api">See Code</a>
                    <a href="click-for-feature-testimonials"><img src="img/extension.png" class="extension" alt=""></a>
                    <p>I help maintain/develop a Chrome extension that Codecademy Advisors use to speed up workflow</p>
                    <a href="https://bitbucket.org/walom8868/codecademy-advisortoolbox/">See Code</a>
                </div>
                <div class="project">
                    <!-- ~ 620x370 on pinta -->
                    <a href="https://bcuz.github.io/wikipedia-viewer/"><img src="img/viewer.png" alt=""></a>
                    <p>Using data from the Wikipedia API </p>
                    <a href="https://github.com/bcuz/wikipedia-viewer">See Code</a>
                    <a href="https://bcuz.github.io/shopping-list/"><img src="img/shopping-list.png" alt=""></a>
                    <p>Using jQuery to manipulate dynamically created elements</p>
                    <a href="https://github.com/bcuz/shopping-list">See Code</a>
                </div>
            </div>
    </section>
    <section class="projects">
        <h2>Landing Pages</h2>
        <p>For the most part, these involved taking an incomplete page and getting it to look like a mockup. A fun way to get better at CSS because you can learn a lot from the pre-existing code.</p>
        <div class="wrapper">
            <div class="project-row">
                <div class="project">
                    <!-- 620x550 pinta -->
                    <a href="http://bcuz.github.io/karma/"><img src="img/karma-b.png" class="img-responsive" alt=""></a>
                    <a href="#">See Code</a>
                    <!-- 1165 x 750 on paint. Could prolly go smaller -->
                    <a href="http://bcuz.github.io/broadway/"><img src="img/broadway.png" class="img-responsive broadway-before-after" alt=""></a>
                    <a href="#">See Code</a>
                </div>
                <div class="project">
                    <a href="https://bcuz.github.io/junction/"><img src="img/junction.png" alt=""></a>
                    <a href="#">See Code</a>
                    <a href="http://bcuz.github.io/bestbite2/"><img src="img/bestbite-b.png" class="img-responsive bestbite-before" alt="" target="_blank"></a>
                    <a href="#">See Code</a>
                </div>
            </div>
        </div>
    </section>
    <?php include 'footer.php'; ?>
</body>

</html>