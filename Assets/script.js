console.log('Test')
var today = moment();
$('#currentDay').text(today.format('MMM Do, YYYY', true));
var time = moment();
$('#currentTime').text(time.format('LTS'));

function update() {
    $('#currentTime').html(moment().format('LTS'));
  }
  
  setInterval(update, 1000);



