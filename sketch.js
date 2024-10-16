// variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 22
let raio = diametro /2

// variaveis velocidade da bolinha
let velocidadexBolinha = 6
let velocidadeyBolinha = 6

//variaveis da raquete
let xRaquete = 5
let yRaquete = 150
let raqueteComprimento = 10
let raqueteAltura = 90

//variaveis raquete do oponente
let xRaqueteOponente = 585
let yRaqueteOponente = 150
let velocidadeyOponente

let colidiu = false

//placar o jogo
let meusPontos = 0
let pontosOponente = 0

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha ()
  movimentaBolinha()
  verificaColisaoBorda()
  mostraRaquete(xRaquete, yRaquete)
  movimentaMinhaRaquete()
  mostraRaquete(xRaqueteOponente, yRaqueteOponente)
  movimentaRaqueteOponente()
  incluiPlacar()
  marcaPonto()
}

function mostraBolinha (){
  circle (xBolinha,yBolinha,diametro)
}
function movimentaBolinha(){
  xBolinha += velocidadexBolinha
  yBolinha += velocidadeyBolinha
}


function verificaColisaoBorda(){
  if (xBolinha + raio> width ||
    xBolinha - raio < 0){
    velocidadexBolinha *= -1
  }
  if (yBolinha - raio > height ||
   yBolinha - raio < 0){
    velocidadeyBolinha *= -1
  }
}
 function mostraRaquete(x,y){
 rect(x,y,raqueteComprimento,raqueteAltura)
}
 function mostraRaqueteOponente(){
  rect(xRaqueteOponente, yRaqueteOponente, raqueteComprimento, raqueteAltura)
}

function movimentaMinhaRaquete() {
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10 
  }
  
  if (keyIsDown(DOWN_ARROW))
    yRaquete += 10
}

function movimentaRaqueteOponente(){
  velocidadeyOponente = yBolinha - yRaqueteOponente - raqueteComprimento /2 - 30 
  yRaqueteOponente += velocidadeyOponente
}

function incluiPlacar() {
  stroke (255)
  textAlign (CENTER)
  textSize (16)
  fill (color(255, 20, 147))
  rect (150, 10, 40,20)
  fill (255)
  text(meusPontos, 170, 26)
  fill (color(255, 20, 147))
  rect (450, 10, 40, 20)
  fill (255)
  text(pontosOponente, 470, 26)
}

 function marcaPonto() {
 if (xBolinha > 590) {
   meusPontos += 1 
 }
   if (xBolinha < 10) {
     pontosOponente += 10 
   }
}