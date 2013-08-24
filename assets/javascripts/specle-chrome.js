window.onload=function() {
  var links = document.getElementsByTagName("a");
  var inputs = document.getElementsByClassName("job_id");

  links[0].onclick=function(){
    chrome.tabs.create({url: show_job_url()});
    return false;
  }

  inputs[0].onkeydown=function(e){
    if (e.keyCode == 13){
      chrome.tabs.create({url: show_job_url()});
      return false;
    }
  }

 function show_job_url(){
  var id = inputs[0].value;
  var url = "http://specle.net/specle_send_jobs/" + id
  return url
 }
};