let post = [{imagem_usuario:"assets/img/meowed.svg", nome_usuario:"meowed",
             imagem_cont:"assets/img/gato-telefone.svg", imagem_curt:"assets/img/respondeai.svg",
             texto1:"Curtido por ", texto2: "e ", strong1:"respondeai ", strong2: "outras 101.523 pessoas",
             icon1:"ellipsis-horizontal", icon2:"heart-outline", icon3:"chatbubble-outline",
             icon4:"paper-plane-outline", icon5:"bookmark-outline"},
            {imagem_usuario:"assets/img/barked.svg", nome_usuario:"barked",
             imagem_cont:"assets/img/dog.svg", imagem_curt:"assets/img/adorable_animals.svg",
             texto1:"Curtido por ", texto2: "e ", strong1:"adorable_animals ", strong2: "outras 99.159 pessoas",
             icon1:"ellipsis-horizontal", icon2:"heart-outline", icon3:"chatbubble-outline",
             icon4:"paper-plane-outline", icon5:"bookmark-outline"}]

export default function Posts() {

    // let post = [{imagem_usuario:"assets/img/meowed.svg", nome_usuario:"meowed",
    //                imagem_cont:"assets/img/gato-telefone.svg", imagem_curt:"assets/img/respondeai.svg",
    //                texto1:"Curtido por ", texto2: "e ", strong1:"respondeai ", strong2: "outras 101.523 pessoas",
    //                icon1:"ellipsis-horizontal", icon2:"heart-outline", icon3:"chatbubble-outline",
    //                icon4:"paper-plane-outline", icon5:"bookmark-outline"},
    //               {imagem_usuario:"assets/img/barked.svg", nome_usuario:"barked",
    //                imagem_cont:"assets/img/dog.svg", imagem_curt:"assets/img/adorable_animals.svg",
    //                texto1:"Curtido por ", texto2: "e ", strong1:"adorable_animals ", strong2: "outras 99.159 pessoas",
    //                icon1:"ellipsis-horizontal", icon2:"heart-outline", icon3:"chatbubble-outline",
    //                icon4:"paper-plane-outline", icon5:"bookmark-outline"}]

    return (
        <div class="posts">

          {
            post.map((cont) => {
              return (
              <Post imagem_usuario={cont.imagem_usuario} nome_usuario={cont.nome_usuario}
               imagem_cont={cont.imagem_cont} imagem_curt={cont.imagem_curt} texto1={cont.texto1}
              texto2={cont.texto2} strong1={cont.strong1} strong2={cont.strong2} icon1={cont.icon1}
              icon2={cont.icon2} icon3={cont.icon3} icon4={cont.icon4} icon5={cont.icon5} />
              )
            })
          }
        </div>
    )
}

function Post(props) {

  return (
    <div className="post">
      <div className="topo">
        <div className="usuario">
          <img src={props.imagem_usuario} />
          {props.nome_usuario}
        </div>
        <div className="acoes">
            <ion-icon name={props.icon1}></ion-icon>
        </div>
      </div>

      <div className="conteudo">
        <img src={props.imagem_cont} />
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon name={props.icon2}></ion-icon>
            <ion-icon name={props.icon3}></ion-icon>
            <ion-icon name={props.icon4}></ion-icon>
          </div>
          <div>
            <ion-icon onCLick={() => salvarPost(post)} name={props.icon5}></ion-icon>
          </div>
        </div>

        <div className="curtidas">
          <img src={props.imagem_curt} />
          <div className="texto">
            {props.texto1}<strong>{props.strong1}</strong>{props.texto2}<strong>{props.strong2}</strong>
          </div>
        </div>
      </div>
    </div>
  )
}

function salvarPost(post) {
  console.log(post)
  // post = <ion-icon name="bookmark"></ion-icon>
  if (post === "post1") {

  }
}