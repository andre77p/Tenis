import './index.scss';


export default function Index() {
    return(
        <main className='pagina-home'>
               <div class="container-mae">

<header class="faixa-header">
    
    <h2 class="texto-logo">Somente administrador</h2>
</header>

<section class="faixa-principal">

    <div class="texto-login">
        <h1>
            Login
        </h1>
    </div>    

<section class="faixa">

       

    <div>
        <div class="email">
            <h3 class="texto-email">
                E-mail:
            </h3>

            <input class="input-email" />
        </div>

        <div class="senha">
            <h3 class="texto-senha">
                Senha:
            </h3>

            <input class="input-senha" />
        </div>

        <div class="botoes">
            <a href="/" class="botao-esqueci-senha"><h4>Esqueci Minha Senha</h4></a>

            <a href="../estoque" class="botao-entrar"> Entrar </a>
        </div>
    </div>
</section>
</section>
</div>
        </main>
    )
}