<?php include("includes/headindex.php"); ?>

<body>
    <?php include("includes/paginas/trabalhos.php"); ?>
    <?php include("includes/paginas/contato.php"); ?>
    <?php include("includes/paginas/sobre.php"); ?>
    <div id="slider">
        <figure>
            <img src="imgsBackground/1.jpg">
            <img src="imgsBackground/2.jpg">
            <img src="imgsBackground/3.jpg">
            <img src="imgsBackground/4.jpg">
            <img src="imgsBackground/5.jpg">
            <img src="imgsBackground/1.jpg">
            <img src="imgsBackground/3.jpg">
            <img src="imgsBackground/4.jpg">
            <img src="imgsBackground/5.jpg">
            <img src="imgsBackground/1.jpg">
        </figure>
    </div>
    <div id="quadrado-position">
        <div class="divSlide">
            <h2 class="nauan">Nauan</h2>
            <h2 class="designn">Design</h2>
        </div>
        <div class="quadrado-index">
        </div>
        <div class="quadradoUtilites">
            <li style="animation: go-back1 3.5s infinite alternate, LiAnim 3.5s;" class="Infograficos">InfoGráficos</li>
            <li style="animation: go-back1 4.6s infinite alternate, LiAnim 4.5s;" class="Web-Design">Web-Design</li>
            <li style="animation: go-back1 5.7s infinite alternate, LiAnim 5.5s;" class="Mockups">Mockups</li>
            <li style="animation: go-back1 6.8s infinite alternate, LiAnim 6.5s;" class="Web-Dev">Web-Dev</li>
        </div>
    </div>
    <div class="menu">
        <ul class="dropdown-menu">
            <li id="fechar" href="javascript: FecharTudo();">Fechar Tudo</li>
            <li id="trabalhosAbrir" style="animation: fadeIn 15.0s, slideMenu 4.5s;">Projetos</li>
            <li id="contatoAbrir" style="animation: fadeIn 15.0s, slideMenu 5.5s;">Contato</li>
            <li id="sobreAbrir" style="animation: fadeIn 10.0s, slideMenu 6.5s;">Sobre</li>
            <li style="animation: fadeIn 10.0s, slideMenu 7.5s;">Menu</li>
            <li style="animation: fadeIn 10.0s, slideMenu 8.5s;">Menu</li>
        </ul>
    </div>
    <?php include("includes/footer.php"); ?>
</body>

</html>