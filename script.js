window.onload=function(){    
    
    window.addEventListener("wheel", function(e){
        // console.log(e);
        e.preventDefault(); //이렇게 해도 크롬은 패시브 모드(컴퓨터가 자기 맘대로 동작)가 동작해서 소용 없음.
    }, {passive:false}); //크롬의 패시브 모드를 막음

    var wrap=document.getElementById("wrap");
    var posY=0; //현재 pan의 top위치를 저장할 변수
    // console.log(wrap);
    //e.deltaY가 해당 움직임의 방향을 정하고 있다. -100일 때 휠업, 100일 때 휠다운
    wrap.addEventListener("wheel", function(e){
        move(e);      
            
    });
    function move(e){
        // console.log(e.deltaY);
        //드래그가 길데 이어져도 움직임은 한번만 이루어지도록 변경
        //슬라이드가 없는 위치까지 슬라이드 되지 않도록 방지   
        if($(".pan").is(":animated")){ //pan이 animated되고 있는 상태라면(이게 참이라면) 이 if문 아래로는 아무 것도 동작하지 않는다. 
            return; 
        }             
        if(e.deltaY==-100){
            posY+=100;
        }else if(e.deltaY==100){
            posY-=100;
        }
        if(posY>0){
            posY=0;
        }
        if(posY<-300){
            posY=-300;
        }
        $(".pan").animate({"top":posY+"%"},1000);
    }
    
    setInterval(function(){
        var $firstChild = $(".pan2 div:first-child");
        var $nextChild = $firstChild.next();
    
        // 다음 자식이 없는 경우 첫 번째 자식을 다시 선택하여 루프를 만듭니다.
        if ($nextChild.length === 0) {
            $nextChild = $(".pan2 div:first-child");
        }
    
        // 첫 번째 자식을 페이드아웃하고, 콜백에서 다음 자식을 페이드인합니다.
        $firstChild.fadeOut(1000, function() {
            $nextChild.fadeIn(1000);
            $firstChild.appendTo(".pan2"); // 첫 번째 자식을 .pan2의 끝으로 이동시킵니다.
        });
    }, 2000);

    // $(document).ready(function() {
    //     setInterval(function() {
    //         // 첫 번째 이미지 애니메이션
    //         $(".pan3 img:nth-child(1)").animate({"left": "-177px"}, 500, function() {
    //             $(this).css("left", "177px");
    //         });
            
    //         // 두 번째 이미지 애니메이션
    //         $(".pan3 img:nth-child(2)").animate({"left": "0"}, 500, function() {
    //             $(".pan3 img:nth-child(1)").appendTo(".pan3"); // 첫 번째 이미지를 끝으로 이동
    //         });
    //     }, 1000); // 1초마다 애니메이션 반복
    // });

    function goToFood() {
        window.location.href = "food.html";
    }
    function goToFortune() {
        window.location.href = "fortune.html";
    }  
};