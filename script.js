
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll =  ( )=> {
sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
        // Ativar cor para navegação

        navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*='+ id + ']').classList.add('active');
        })
    }
});

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove icone toggle e navbar quando clickar nos links da navbar(scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const formulario = document.getElementById('myForm');
  formulario.addEventListener('submit', function() {
    alert('Obrigada! Formulário enviado com sucesso! Em breve retornarei seu contato.');
  });
  
function abrirLeiaMais(){
    const largura = 800; // Largura da janela
    const altura = 600; // Altura da janela
    const esquerda = (screen.width - largura) / 2; // Posição esquerda da janela
    const topo = (screen.height - altura) / 2;
    const janela = window.open(".html", "Mariane", "width=" + largura + ", height=" + altura + ", left=" + esquerda + ", top=" + topo);
    janela.document.write("<title>Um pouco mais sobre Mariane</title>"); 
    janela.document.write('<body bgcolor="#EEEEEE" style="color: #474549; font-family: sans-serif; text-align:center"><h1 style="color: #675af3">Breve histórico</h1><p >Nascida em Porto Feliz, uma pequena cidade no interior, em 27/10/1995, Mariane sempre demonstrou curiosidade e paixão pelo conhecimento desde muito cedo. Seus pais, reconhecendo seu potencial, incentivaram seus estudos desde o início, proporcionando um ambiente propício para seu crescimento intelectual.<br><br>Desde os primeiros anos na escola, Mariane mostrou-se uma aluna dedicada e comprometida. Sua sede por aprendizado e sua determinação em alcançar o sucesso acadêmico a tornaram um destaque entre suas colegas e professoras.</p><h1 style="color: #675af3">Vida Academica</h1>Ao concluir o ensino médio, Mariane foi admitida na Universidade Federal de São Carlos, onde decidiu cursar Física. E ao se formar decidiu mudar de carreira para estudar <strong>Análise e Desenvolvimento de Sistemas</strong> na renomada <strong>Faculdade de Tecnologia de Sorocaba</strong>.<br><br>Durante sua graduação, ele manteve seu compromisso com o aprendizado e a excelência acadêmica, além de participar de estágios e projetos de pesquisa.<p>Atualmente, Mariane está na reta final de sua graduação em ADS e já está envolvido em projetos inovadores, buscando soluções tecnológicas para desafios do mundo real. Sua paixão pelo conhecimento e seu comprometimento em causar um impacto positivo na sociedade o impulsionam a continuar aprendendo e crescendo como profissional e como pessoa. Com sua mente brilhante, ética de trabalho inabalável e determinação para enfrentar os desafios que encontrar pelo caminho, Mariane está preparada para se destacar em sua área de atuação e fazer contribuições significativas para a sociedade. Sua jornada como estudante é apenas o começo de uma trajetória promissora e inspiradora.</p></body>');        
}