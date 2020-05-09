
        function goBack(myTimer){
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            if(myTimer == -1){
                myTimer = setInterval(function(){
                    scrollTop -= 3;
                    if(scrollTop<=0){
                        scrollTop=0;
                        window.clearInterval(myTimer);
                        myTimer = -1;
                    }
                    window.scrollTo(0,scrollTop);
                },100)
            }
        }