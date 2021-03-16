function o1(){
    let a=[

    ]
    let b=[
        document.getElementById("id1").value,
        document.getElementById("id2").value,
        document.getElementById("id3").value,
        document.getElementById("id4").value,
        document.getElementById("id5").value
    ]

    for(let i=0;i<b.length;i++){
        a.push(b[i]);
    }
    alert(a);
    console.log(a);
}