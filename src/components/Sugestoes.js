export default function Sugestoes() {

    const sugestao = [{imagem: "assets/img/bad.vibes.memes.svg", nome: "bad.vibes.memes", razao: "Segue você"},
                      {imagem: "assets/img/chibirdart.svg", nome: "chibirdart", razao: "Segue você"},
                      {imagem: "assets/img/razoesparaacreditar.svg", nome: "razoesparaacreditar", razao: "Novo no Instagram"},
                      {imagem: "assets/img/adorable_animals.svg", nome: "adorable_animals", razao: "Segue você"},
                      {imagem: "assets/img/smallcutecats.svg", nome: "smallcutecats", razao: "Segue você"}]

    // const imagem = sugestao.map((item) => item.imagem)
    // console.log(imagem)

    return (
        <div class="sugestoes">
          <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
          </div>
        
        {
          sugestao.map((sugest) => {
            return <Sugestao imagem={sugest.imagem} nome={sugest.nome} razao={sugest.razao} />
          })
        }
        
        </div>
    )
}

function Sugestao(props) {
  // console.log(props)
  return (
    <div className="sugestao">
      <div className="usuario">
          <img src={props.imagem} />
          <div class="texto">
                <div className="nome">{props.nome}</div>
                <div className="razao">{props.razao}</div>
              </div>
      </div>
    </div>
  )
}