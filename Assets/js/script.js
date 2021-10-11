var today = moment();
$('#currentDay').text(today.format('MMM Do, YYYY', true));
// var time = moment();
// $('#currentTime').text(time.format('LTS'));

function update() {
    $('#currentTime').html(moment().format('LTS'));
  }
  
    setInterval(update, 1000);

    $(document).ready(function(){

    $(".saveBtn").on("click", function(){
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(text, time);
    })
    
    function updateTime(){
        var currentTime = moment().hour();
        console.log(currentTime)
        $(".description").each(function(){
            var hour = parseInt(
                $(this).attr("id").split("hour")
            )
                if (hour < currentTime){
                    $(this).removeClass("present");
                    $(this).removeClass("future");
                    $(this).addClass("past");
                }
                else if (hour === currentTime){
                    $(this).removeClass("future");
                    $(this).removeClass("past");
                    $(this).addClass("present");
                }
                else {
                    $(this).removeClass("past");
                    $(this).removeClass("present");
                    $(this).addClass("future");
                }
        }   )
    
    }
    updateTime()
    
    
    
    })



