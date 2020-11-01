const textArea=document.querySelector('.formQuestion')
const form=document.getElementById('form')
form.addEventListener('submit',(event)=>{
    event.preventDefault()
    const content=textArea.value
    console.log(content);
    $.ajax({
        url:'http://localhost:3000/createquestion',
        type:'POST',
        data:{
            content
        },
        success:(res)=>{
            console.log(res);
        },
        error:(res)=>{
            console.log(res);
        }
    })
})
countChar=(val)=>{
    var len = val.value.length;
    if (len > 200) {
      val.value = val.value.substring(0, 200);
    } else {
      $('#charNum').text(len+"/200 ki tu");
    }
  };