export default function Stories() {

  const story = [{imagem: "assets/img/9gag.svg", usuario: "9gag"},
                 {imagem: "assets/img/meowed.svg", usuario: "meowed"},
                 {imagem: "assets/img/barked.svg", usuario: "barked"},
                 {imagem: "assets/img/nathanwpylestrangeplanet.svg", usuario: "nathanwpylestrangeplanet"},
                 {imagem: "assets/img/wawawicomics.svg", usuario: "wawawicomics"},
                 {imagem: "assets/img/respondeai.svg", usuario: "respondeai"},
                 {imagem: "assets/img/filomoderna.svg", usuario: "filomoderna"},
                 {imagem: "assets/img/memeriagourmet.svg", usuario: "memeriagourmet"},
                 {icon:"chevron-forward-circle"}]

    return (
        <div class="stories">

          {
            story.map((sto) => {
              return <Story imagem={sto.imagem} usuario={sto.usuario} icon={sto.icon} />
            })
          }

        </div>
    )
}

function Story(props) {
  return (
    <div>
      <div className="story">
        <div className="imagem">
          <img src={props.imagem} />
        </div>
        <div className="usuario">
          {props.usuario}
        </div>
      </div>

      <div class="setinha">
        <ion-icon name={props.icon}></ion-icon>
      </div>
    </div>
  )
}