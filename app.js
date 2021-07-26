function makeGrid(){
    for(i=0; i<64; i++){
        $('<div class="cell"></div>').appendTo('.grid')
    }
}

makeGrid()

function makePalette(){
    const palette = 
    [
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "purple"
    ]

for(let i = 0; i < palette.length; i++){
   const nextColor = palette[i]
   let newButton = $("<button></button>")
   newButton.css("background-color", nextColor)
   $(newButton).appendTo(".palette")
}

$(".palette button").first().addClass('active');

}

makePalette() 

function onPaletteClick() {
    // code goes here
    $('.palette button').removeClass('active')
    $(this).addClass('active')
    $('.palette').click
  }
 
  $('.palette button').click(onPaletteClick) 

  function onGridClick(){
      let paint = $('.palette .active').attr('style')
      $(this).attr('style', paint)
      $('.grid').click
  }

  $('.grid .cell').click(onGridClick)

  $('button.fill-all').click(function () {
    // stuff goes here
    console.log("hi")
    let paint = $('.palette .active').attr('style')
    $("div.cell").attr('style', paint)
  })

  $('button.fill-empty').click(function () {
    // stuff goes here
    let paint = $('.palette .active').attr('style')
    for(i=1; i<65; i++){
       let a = $("div.cell:nth-of-type(" + i + ")").attr('style')
      if(typeof a === typeof undefined || a === false){
        $("div.cell:nth-of-type(" + i + ")").attr('style', paint)
      }
    }

  })

  $('button.clear').click(function () {
    // stuff goes here
    console.log("greetings")
    $("div.cell").removeAttr("style")
  })

