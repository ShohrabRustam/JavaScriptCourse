setInterval(function(){
    const timestamp= new Date().toISOString();
    MessageChannel.innerHTML = timestamp();
},time_in_mili_second(1000));