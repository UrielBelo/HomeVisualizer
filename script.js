var currentIronStone = 'f'
var currentTonePallet = 'bfb'
var currentColorSchema = 1

function selectTonePallet(tonePallet){
    currentTonePallet = tonePallet
    alterPhoto(currentIronStone,tonePallet,currentColorSchema)
}
function selectColorSchema(colorSchema){
    currentColorSchema = colorSchema
    alterPhoto(currentIronStone,currentTonePallet,colorSchema)
}
function selectIronStone(ironStone){
    currentIronStone = ironStone
    alterPhoto(ironStone,currentTonePallet,currentColorSchema)
}

function alterPhoto(ironStone,changeTonePallet,colorSchema){
    photoName = ironStone + changeTonePallet + colorSchema
    console.log(photoName)
}