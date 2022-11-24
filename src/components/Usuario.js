let usuario = [{imagem:"assets/img/catanacomics.svg", texto_strong:"catanacomics",
                texto_span:"Catana", icon:"pencil"}]

export default function Usuario() {

    // let usuario = [{imagem:"assets/img/catanacomics.svg", texto_strong:"catanacomics",
    //                  texto_span:"Catana"}]

    return (
        <div>
        {
            usuario.map((usr) => {
                return <DadosUsuario imagem={usr.imagem} texto_strong={usr.texto_strong}
                 texto_span={usr.texto_span} icon={usr.icon} />
            })
        }
        </div>
    )
}

function DadosUsuario(props) {
    return (
        <div class="usuario">
            <img onClick={mudarImagem} src={props.imagem} />
            <div class="texto">
                <strong>{props.texto_strong}</strong>
                <span>
                    {props.texto_span}
                    <ion-icon onClick={nomePrompt} name={props.icon}></ion-icon>
                </span>
            </div>
        </div>
    )
}

function mudarImagem() {
    usuario.imagem = prompt('Link da nova imagem: ')
}

function nomePrompt() {
    console.log(usuario)
    usuario.texto_span = prompt('Novo nome de usuário: ')
    // window.reload()
}