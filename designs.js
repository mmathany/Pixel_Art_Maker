// Select color input
// When size is submitted by the user, call makeGrid()
// pull height and width data from input form
$('#sizePicker').submit(function(event) {
  event.preventDefault();
  const height = $('#inputHeight').val();
  const width = $('#inputWidth').val();
  makeGrid(height, width);
})

function makeGrid(x, y) {
  $('tr').remove();
  //build grid
  for (let i = 1; i <= x; i++) {
    $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
    for (let j = 1; j <= y; j++) {
      $('#table' + i).append('<td></td>');
    }
  }
  //add color to cell
  $('td').click(function addColor() {
    const color = $('#colorPicker').val();
    if ($(this).attr('style')) {
      $(this).removeAttr('style');
    } else {
        $(this).attr('style', 'background-color:' + color);
    }
  })
}
