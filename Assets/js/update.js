// var time = moment();
// $('#currentTime').text(time.format('LTS'));
function update() {
    $('#currentTime').html(moment().format('LTS'));
}
