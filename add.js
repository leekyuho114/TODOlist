document.querySelector('#add').onclick = function(){ 
    //var OOO 대신 onclick을 변수로 그냥 써벌임
    if(document.querySelector('#newTODO input').value.length==0){
        alert("Please Enter");
    }
    //document.write("What to do?");
    else{
        document.querySelector('#TODOs').innerHTML+= document.querySelector("#newTODO input").value+='<br>';
        document.querySelector("#newTODO input").value=null;
        //TODOs에 해당하는 태그에 innerHTML(해당하는 요소의 HTML값)에 계속해서 새로들어오는 value 값을 추가함
        //박스 초기화를 위해 null값 대입

        // document.querySelector('#TODOs').innerHTML+='<div>${document.querySelector("#newTODO input")}</div>';

        // '
        // <div class="TODOs">
        //         <span id="taskname">
        //             ${document.querySelector("#newTODO input").value}
        //         </span>
        //     </div>
        // ';
    }
}
